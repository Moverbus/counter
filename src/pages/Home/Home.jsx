import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../components/CardsContext";
import EmblemKremen from "../../img/EmblemKremen.jpg";
import Bus from "../../img/Bus12.jpg";
import CardForm from "../../components/CardForm/CardForm";

function Home() {
  const { setCards } = useContext(CardsContext);
  const navigate = useNavigate();

  // Дані, які передає форма
  const [formData, setFormData] = useState({
    subText: "Автобус",
    title2: "КП КТУ - Кременчуг(автобус)",
    bigText: "№BI2186EE",
    passengers: 1,
  });

  const generateRandomNumber = () => {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  };

  const handleAdd = () => {
    const newCard = {
      id: Date.now(),
      imageTop: EmblemKremen,
      title1: "Кременчук",
      title2: formData.title2,
      title3: "Серія",
      title4: generateRandomNumber(),
      imageCenter: Bus,
      bigText: formData.bigText,
      subText: formData.subText,
      section: [
        { title: "Дата", content: new Date().toLocaleDateString() },
        {
          title: "Час",
          content: new Date().toLocaleTimeString("uk-UA", { hour12: false }),
        },
        { title: "Пасажири", content: formData.passengers.toString() },
      ],
      footerText: "Квиток разового використання",
      footerTimer: 60 * 60,
    };

    setCards((prev) => [...prev, newCard]);
    navigate("/about");
  };

  return (
    <div>
      <h1>Додати картку</h1>

      <CardForm onChange={setFormData} />

      <button onClick={handleAdd} className="add-button">
        Додати
      </button>
    </div>
  );
}

export default Home;
