import { Navigate, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { LanguageProvider } from '@/contexts/languageContext.tsx';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <LanguageProvider>
      <AuthContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, logout }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/HarrisonPage" replace />} />
          <Route path="/HarrisonPage" element={<Home />} />
          <Route path="/HarrisonPage/other" element={<Navigate to="/HarrisonPage" replace />} />
        </Routes>
      </AuthContext.Provider>
    </LanguageProvider>
  );
}
