import React, { useState, useEffect, useContext } from "react";
import useDropdown from "../Hooks/useDropdown";
import Fish from "../Classes/FishClass";
import WATER_TYPES from "../Data/WaterTypesData";
import Results from "./Results";

const SearchParams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fishTypes, setFishTypes] = useState([]); //will change based on water type
  const [waterType, WaterTypeDrodown] = useDropdown(
    "Water Type",
    "",
    WATER_TYPES
  );
  const [fishType, FishTypesDropdown, setFishType] = useDropdown(
    "Fish Type",
    "",
    fishTypes
  );
  const [fishArray, setFishArray] = useState([]);

  async function requestFishArray() {
    const fishArray = await Fish.getFishArray(fishType, waterType, searchTerm);

    setFishArray(fishArray || []);
  }

  useEffect(() => {
    setFishTypes([]);
    setFishType("");

    Fish.getFishTypes(waterType).then((FishTypesStrings) => {
      setFishTypes(FishTypesStrings);
    }, console.error);
  }, [waterType, setFishTypes, setFishType]);

  useEffect(() => {
    requestFishArray();
  }, []);

  return (
    <div className="search-params">
      <form
        className="fishSearchForm"
        onSubmit={(e) => {
          e.preventDefault();
          requestFishArray();
        }}
      >
        <label className="input-label" htmlFor="searchTerm">
          <p>Search</p>
          <input
            id="searchTerm"
            value={searchTerm}
            placeholder="Search by fish name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <WaterTypeDrodown />
        <FishTypesDropdown />
        <button className="submit-btn">Apply Filters</button>
      </form>
      <Results fish={fishArray} />
    </div>
  );
};

export default SearchParams;
