import { Routes, Route, Navigate } from "react-router-dom";
import ScrollManager from "./components/ScrollManager.jsx";
import PromoBar from "./components/PromoBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

export default function App() {
  return (
    <>
      <ScrollManager />
      <div className="topbar">
        <PromoBar />
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}