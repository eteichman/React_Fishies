import React from "react";
import { Link } from "@reach/router";

export default function FishWidget({ name, imagePath, type, id, waterType }) {
  return (
    <div className="fish-widget">
      <Link to={`/FishDetails/${id}`} className="fish-widget-link">
        <img src={imagePath} alt={name} />
        <h2 className="fish-widget-name">{name}</h2>
      </Link>

      <p>{`${type} | ${waterType}`}</p>
    </div>
  );
}
