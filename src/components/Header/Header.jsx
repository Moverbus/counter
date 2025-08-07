import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LeftArrow from "../../assets/LeftArrow.jsx";

function Header() {
  const [activeTab, setActiveTab] = useState("ticket");

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="logo-title">
          <Link to="/" className="back-link">
            <LeftArrow className="arrow" />
          </Link>
          <div className="title-cont">
            <span className="title">Архів</span>
          </div>
        </div>
      </header>

      <div className="tabs-wrapper">
        <div
          className="slider"
          style={{
            transform:
              activeTab === "ticket" ? "translateX(0%)" : "translateX(100%)",
          }}
        />
        <button
          onClick={() => setActiveTab("ticket")}
          className={`tab ${activeTab === "ticket" ? "active" : ""}`}
        >
          Квиток
        </button>
        <button
          onClick={() => setActiveTab("pass")}
          className={`tab ${activeTab === "pass" ? "active" : ""}`}
        >
          Проїзний
        </button>
      </div>
    </div>
  );
}

export default Header;
