import { useCallback, useEffect, useState } from "react";
import { supabase } from "./supabase";
import type { NewSkillCategory, SkillCategory } from "./types";

export function useSkillCategories() {
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("skill_categories")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      setError(error.message);
    } else {
      setCategories(data as SkillCategory[]);
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const addCategory = async (category: NewSkillCategory) => {
    const { error } = await supabase.from("skill_categories").insert(category);
    if (!error) await refresh();
    return { error: error?.message ?? null };
  };

  const updateCategory = async (id: string, category: Partial<NewSkillCategory>) => {
    const { error } = await supabase
      .from("skill_categories")
      .update({ ...category, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (!error) await refresh();
    return { error: error?.message ?? null };
  };

  const deleteCategory = async (id: string) => {
    const { error } = await supabase.from("skill_categories").delete().eq("id", id);
    if (!error) await refresh();
    return { error: error?.message ?? null };
  };

  return { categories, loading, error, refresh, addCategory, updateCategory, deleteCategory };
}
