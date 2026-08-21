import { useState } from "react";
import { LogOut, FolderKanban, Sparkles } from "lucide-react";
import { useAuth } from "../lib/AuthContext";
import { ProjectsAdmin } from "./ProjectsAdmin";
import { SkillsAdmin } from "./SkillsAdmin";

type Tab = "projects" | "skills";

export function AdminDashboard() {
  const { signOut } = useAuth();
  const [tab, setTab] = useState<Tab>("projects");

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Portfolio Admin</h1>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 w-fit">
          <button
            onClick={() => setTab("projects")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              tab === "projects" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FolderKanban size={16} />
            Projects
          </button>
          <button
            onClick={() => setTab("skills")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              tab === "skills" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Sparkles size={16} />
            Skills
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {tab === "projects" ? <ProjectsAdmin /> : <SkillsAdmin />}
      </main>
    </div>
  );
}
