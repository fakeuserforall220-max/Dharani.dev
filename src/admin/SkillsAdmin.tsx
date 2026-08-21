import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { useSkillCategories } from "../lib/useSkillCategories";
import { ICON_OPTIONS, type NewSkillCategory, type SkillCategory } from "../lib/types";

const emptyForm: NewSkillCategory = {
  title: "",
  icon: ICON_OPTIONS[0],
  image: "",
  skills: [],
  sort_order: 0,
};

export function SkillsAdmin() {
  const { categories, loading, addCategory, updateCategory, deleteCategory } = useSkillCategories();
  const [editing, setEditing] = useState<SkillCategory | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<NewSkillCategory>(emptyForm);
  const [skillsInput, setSkillsInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openNewForm = () => {
    setEditing(null);
    setForm({ ...emptyForm, sort_order: categories.length });
    setSkillsInput("");
    setError(null);
    setShowForm(true);
  };

  const openEditForm = (category: SkillCategory) => {
    setEditing(category);
    setForm({
      title: category.title,
      icon: category.icon,
      image: category.image,
      skills: category.skills,
      sort_order: category.sort_order,
    });
    setSkillsInput(category.skills.join(", "));
    setError(null);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    const payload: NewSkillCategory = {
      ...form,
      skills: skillsInput.split(",").map((s) => s.trim()).filter(Boolean),
    };

    const result = editing
      ? await updateCategory(editing.id, payload)
      : await addCategory(payload);

    if (result.error) {
      setError(result.error);
    } else {
      closeForm();
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this skill category? This cannot be undone.")) return;
    await deleteCategory(id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Skill Categories ({categories.length})</h2>
        <button
          onClick={openNewForm}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          <Plus size={16} />
          Add Category
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-xs text-gray-400 mb-3">Icon: {category.icon}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-semibold uppercase text-gray-400 bg-gray-50 border border-gray-100 rounded-md px-2 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditForm(category)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium transition-colors"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg">
                {editing ? "Edit Category" : "New Category"}
              </h3>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-900">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <Field label="Category title">
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Frontend Development"
                  className="input"
                />
              </Field>

              <Field label="Icon">
                <select
                  value={form.icon}
                  onChange={(e) => setForm({ ...form, icon: e.target.value })}
                  className="input"
                >
                  {ICON_OPTIONS.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </Field>

              <Field label="Image URL">
                <input
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="input"
                />
              </Field>

              <Field label="Skills (comma separated)">
                <input
                  value={skillsInput}
                  onChange={(e) => setSkillsInput(e.target.value)}
                  placeholder="React 19, TypeScript, Tailwind CSS"
                  className="input"
                />
              </Field>

              <Field label="Sort order (lower = shows first)">
                <input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
                  className="input"
                />
              </Field>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
            </div>

            <div className="flex gap-3 p-6 border-t border-gray-100">
              <button
                onClick={closeForm}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.title}
                className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Category"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .input {
          width: 100%;
          padding: 0.65rem 0.9rem;
          border-radius: 0.75rem;
          border: 1px solid #E5E7EB;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s;
          color: #111827;
          background-color: #FFFFFF;
        }
        .input::placeholder {
          color: #9CA3AF;
        }
        .input:focus {
          border-color: #111827;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
