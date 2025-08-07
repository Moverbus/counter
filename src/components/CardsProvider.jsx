import { useState, useEffect } from "react";
import { CardsContext } from "./CardsContext";

export function CardsProvider({ children }) {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("cards");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}
