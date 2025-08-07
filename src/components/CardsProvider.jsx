import { useState } from "react";
import { CardsContext } from "./CardsContext";

export function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}
