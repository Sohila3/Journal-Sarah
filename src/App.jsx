import PromoBar from "./components/PromoBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import About from "./components/About.jsx";
import Workshops from "./components/Workshops.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

export default function App() {
  return (
    <>
      <div className="topbar">
        <PromoBar />
        <Navbar />
      </div>
      <main>
        <Hero />
        <Categories />
        <About />
        <Workshops />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}