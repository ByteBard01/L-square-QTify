import React from "react";
import Card from "../Card/Card";
import "./Section.module.css";

const Section = ({ title, data }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="collapse-button">
          {title === "Top Albums" ? "Collapse" : "Show all"}
        </button>
      </div>
      <div className="card-grid">
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            follows={item.follows}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
