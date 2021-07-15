import React from "react";
import FishWidget from "./FishWidget";

const Results = ({ fish }) => {
  return (
    <div className="Fishies">
      {fish.length === 0 ? (
        <h1>No Fish species found</h1>
      ) : (
        fish.map((fish) => (
          <FishWidget
            key={fish.id}
            name={fish.name}
            imagePath={fish.imagePath}
            type={fish.type}
            waterType={fish.waterType}
            id={fish.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
