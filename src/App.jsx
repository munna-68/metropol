import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import ReservationsPage from "./pages/ReservationsPage";
import Preloader from "./components/Preloader";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show initial preloader
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // show preloader briefly on route changes
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background text-on-background">
      <div className="grain-overlay fixed inset-0 z-[60] pointer-events-none" />
      <ScrollToTop />
      <Preloader visible={loading} onFinish={() => setLoading(false)} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
