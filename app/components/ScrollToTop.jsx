"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    const onChatOpen = () => setLifted(true);
    const onChatClose = () => setLifted(false);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("chatbot:open", onChatOpen);
    window.addEventListener("chatbot:close", onChatClose);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("chatbot:open", onChatOpen);
      window.removeEventListener("chatbot:close", onChatClose);
    };
  }, []);

  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-lg hover:bg-gold-light transition-all duration-300 ${lifted ? "bottom-60 translate-y-0" : "bottom-24 translate-y-0"
        }`}
    >
      <ChevronUp size={18} />
    </button>
  );
}

