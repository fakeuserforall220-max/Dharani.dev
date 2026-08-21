import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./lib/AuthContext";
import { PortfolioSite } from "./PortfolioSite";
import { AdminGate } from "./admin/AdminGate";
import { ADMIN_PATH } from "./lib/adminPath";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PortfolioSite />} />
          <Route path={ADMIN_PATH} element={<AdminGate />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
