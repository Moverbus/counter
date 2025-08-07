import { useState, useEffect } from "react";
import "./CardForm.css";

function CardForm({ onChange }) {
  const busNumbers = [
    "№BI2186EE",
    "№BI2196EE",
    "№BI2198EE",
    "№BI2203EE",
    "№BI2204EE",
  ];
  const trolleyNumbers = ["№012", "№016", "№019", "№032"];

  const [subText, setSubText] = useState("Автобус");
  const [title2, setTitle2] = useState("КП КТУ - Кременчуг(автобус)");
  const [bigText, setBigText] = useState(busNumbers[0]);
  const [passengers, setPassengers] = useState(1);

  // Зміна маршруту і номера при виборі типу транспорту
  useEffect(() => {
    if (subText === "Автобус") {
      setTitle2("КП КТУ - Кременчуг(автобус)");
      setBigText(busNumbers[0]); // перший номер автобуса
    } else {
      setTitle2("КП КТУ - Кременчуг");
      setBigText(trolleyNumbers[0]); // перший номер тролейбуса
    }
  }, [subText]);

  // Надсилаємо дані у Home
  useEffect(() => {
    onChange({ subText, title2, bigText, passengers });
  }, [subText, title2, bigText, passengers, onChange]);

  const toggleTransportType = () => {
    setSubText((prev) => (prev === "Автобус" ? "Тролейбус" : "Автобус"));
  };

  const incrementPassengers = () => setPassengers((p) => p + 1);
  const decrementPassengers = () => setPassengers((p) => (p > 1 ? p - 1 : 1));

  // Номери, які показуються в select
  const availableNumbers = subText === "Автобус" ? busNumbers : trolleyNumbers;

  return (
    <div className="form-container">
      <div className="top-cont">
        <p>галочка</p>
        <div>
          <p>Проїзд(загальний)</p>
          <p onClick={toggleTransportType} className="transport-toggle">
            {subText}
          </p>
        </div>
        <p>12.00 UAH</p>
      </div>

      <label>Номер транспорту</label>
      <select
        value={bigText}
        onChange={(e) => setBigText(e.target.value)}
        className="select"
      >
        {availableNumbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <label>Кількість квитків</label>
      <div className="inline-flex">
        <button onClick={decrementPassengers} className="counter-btn">
          −
        </button>
        <input
          type="text"
          readOnly
          value={passengers}
          className="counter-value"
        />
        <button onClick={incrementPassengers} className="counter-btn">
          +
        </button>
      </div>
    </div>
  );
}

export default CardForm;
