import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// بيرجّع الصفحة لفوق لما تتغير الصفحة، وبينزل للقسم لو الرابط فيه #
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}