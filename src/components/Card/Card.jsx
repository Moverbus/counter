import { useEffect, useState } from "react";
import "./Card.css";
import InfoIcon from "../../assets/InfoIcon";

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function Card({ data, onRemove }) {
  const [timer, setTimer] = useState(data.footerTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRemove = () => {
    if (window.confirm("Видалити картку?")) {
      onRemove(data.id);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={data.imageTop} alt="small" className="card-thumb" />
        <div className="card-info">
          <p className="title-line">{data.title1}</p>
          <p className="title-line">{data.title2}</p>
          <div className="title-block">
            <p className="title-line">Серія</p>
            <p className="title-line bold">{data.title4}</p>
          </div>
        </div>
        <InfoIcon className="card-icon" onClick={handleRemove} />
      </div>

      <img src={data.imageCenter} alt="main" className="card-main-img" />

      <div>
        <p className="card-big-text">{data.bigText}</p>
        <p className="card-sub-text">{data.subText}</p>
      </div>

      <div className="card-sections">
        {data.section.map((sec, index) => (
          <div key={index} className="section-block">
            <div className="section-title">{sec.title}</div>
            <div className="section-content">{sec.content}</div>
          </div>
        ))}
      </div>
      <p className="card-footer">{data.footerText}</p>
      <p className="card-timer">{formatTime(timer)}</p>
    </div>
  );
}

export default Card;
