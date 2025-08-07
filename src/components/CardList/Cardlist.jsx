import { useContext } from "react";
import { CardsContext } from "../CardsContext";
import Card from "../Card/Card";

function CardList() {
  const { cards, setCards } = useContext(CardsContext);

  const removeCard = (idToRemove) => {
    setCards((prev) => prev.filter((card) => card.id !== idToRemove));
  };

  return (
    <div className="card-list">
      {cards.length === 0 && <p>Немає доданих карток</p>}
      {cards.map((card) => (
        <Card key={card.id} data={card} onRemove={removeCard} />
      ))}
    </div>
  );
}

export default CardList;
