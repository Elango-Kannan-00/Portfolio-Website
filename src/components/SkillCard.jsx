import React from "react";

const SkillCard = ({ name, image }) => {
  return (
    <div
      className="card"
      style={{
        width: "150px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "50px", height: "50px", marginBottom: "10px" }}
      />
      <p style={{ fontSize: "14px", fontWeight: "500" }}>{name}</p>
    </div>
  );
};

export default SkillCard;
