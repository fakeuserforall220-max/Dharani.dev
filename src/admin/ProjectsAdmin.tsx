import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { useProjects } from "../lib/useProjects";
import { PROJECT_COLOR_OPTIONS, type NewProject, type Project } from "../lib/types";

const emptyForm: NewProject = {
  title: "",
  description: "",
  tags: [],
  type: "",
  image: "",
  link: "#",
  github: "#",
  color: PROJECT_COLOR_OPTIONS[0].value,
  sort_order: 0,
};

export function ProjectsAdmin() {
  const { projects, loading, addProject, updateProject, deleteProject } = useProjects();
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<NewProject>(emptyForm);
  const [tagsInput, setTagsInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openNewForm = () => {
    setEditing(null);
    setForm({ ...emptyForm, sort_order: projects.length });
    setTagsInput("");
    setError(null);
    setShowForm(true);
  };

  const openEditForm = (project: Project) => {
    setEditing(project);
    setForm({
      title: project.title,
      description: project.description,
      tags: project.tags,
      type: project.type,
      image: project.image,
      link: project.link,
      github: project.github,
      color: project.color,
      sort_order: project.sort_order,
    });
    setTagsInput(project.tags.join(", "));
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
    const payload: NewProject = {
      ...form,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
    };

    const result = editing
      ? await updateProject(editing.id, payload)
      : await addProject(payload);

    if (result.error) {
      setError(result.error);
    } else {
      closeForm();
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    await deleteProject(id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Projects ({projects.length})</h2>
        <button
          onClick={openNewForm}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${project.color}`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase text-gray-400 bg-gray-50 border border-gray-100 rounded-md px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditForm(project)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
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
                {editing ? "Edit Project" : "New Project"}
              </h3>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-900">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <Field label="Title">
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="input"
                />
              </Field>

              <Field label="Description">
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="input"
                />
              </Field>

              <Field label="Tags (comma separated)">
                <input
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                  className="input"
                />
              </Field>

              <Field label="Type / Badge label">
                <input
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  placeholder="Featured, Product, Utility..."
                  className="input"
                />
              </Field>

              <Field label="Badge color">
                <select
                  value={form.color}
                  onChange={(e) => setForm({ ...form, color: e.target.value })}
                  className="input"
                >
                  {PROJECT_COLOR_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
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

              <div className="grid grid-cols-2 gap-4">
                <Field label="Live link">
                  <input
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    className="input"
                  />
                </Field>
                <Field label="GitHub link">
                  <input
                    value={form.github}
                    onChange={(e) => setForm({ ...form, github: e.target.value })}
                    className="input"
                  />
                </Field>
              </div>

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
                {saving ? "Saving..." : "Save Project"}
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
