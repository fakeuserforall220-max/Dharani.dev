import { useAuth } from "../lib/AuthContext";
import { AdminLogin } from "./Login";
import { AdminDashboard } from "./Dashboard";

export function AdminGate() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <p className="text-white/40 text-sm">Loading...</p>
      </div>
    );
  }

  return session ? <AdminDashboard /> : <AdminLogin />;
}
