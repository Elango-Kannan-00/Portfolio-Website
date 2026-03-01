import React from "react";

const AchievementCard = ({ image, title, onAboutClick }) => {
  return (
    <div className="card" style={{ width: "280px" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h4 style={{ margin: "15px 0" }}>{title}</h4>
      <button className="ek-btn" onClick={onAboutClick}>
        About
      </button>
    </div>
  );
};

export default AchievementCard;
