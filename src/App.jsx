import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import About from "./components/About.jsx";
import Instagram from "./components/Instagram.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

export default function App() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories onSelect={setCategory} />
        <FeaturedProducts category={category} setCategory={setCategory} />
        <About />
        <Instagram />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}