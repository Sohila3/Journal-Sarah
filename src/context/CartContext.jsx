import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sj-cart")) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("sj-cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (product) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...product, qty: 1 }];
    });

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{ items, add, changeQty, remove, clear, count, total, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);