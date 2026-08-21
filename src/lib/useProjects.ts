import { useCallback, useEffect, useState } from "react";
import { supabase } from "./supabase";
import type { NewProject, Project } from "./types";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      setError(error.message);
    } else {
      setProjects(data as Project[]);
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const addProject = async (project: NewProject) => {
    const { error } = await supabase.from("projects").insert(project);
    if (!error) await refresh();
    return { error: error?.message ?? null };
  };

  const updateProject = async (id: string, project: Partial<NewProject>) => {
    const { error } = await supabase
      .from("projects")
      .update({ ...project, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (!error) await refresh();
    return { error: error?.message ?? null };
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (!error) await refresh();
    return { error: error?.message ?? null };
  };

  return { projects, loading, error, refresh, addProject, updateProject, deleteProject };
}
