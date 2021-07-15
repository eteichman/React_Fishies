import FISHIES from "../Data/FishData";
import FISH_TYPES from "../Data/FishTypesData";
import Fish from "./FishClass";

class FishDataRetrieval {
  constructor() {}
  //--------------------------------------------------------------------------------

  /**
   * Get an array of fish objects, filtered by fish type, water type, and fish name
   * @param fishType filter by fish type
   * @param waterType filter by water type
   * @param searchTerm filter by fish name
   * @returns An array of fish objects
   */
  static getFishArrayFn(
    fishType: string,
    waterType: string,
    searchTerm: string
  ): Fish[] {
    let fishArray = FISHIES;

    //Filter by fish type if provided
    if (fishType && fishType.toLowerCase() !== "all") {
      fishArray = fishArray.filter((fish) => fish.type === fishType);
    }

    //Filter by water type if provided
    if (waterType && waterType.toLowerCase() !== "all") {
      fishArray = fishArray.filter((fish) => fish.waterType === waterType);
    }

    //Filter by search term if provided
    if (searchTerm) {
      fishArray = fishArray.filter((fish) =>
        fish.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return fishArray;
  }
  //--------------------------------------------------------------------------------

  /**
   * Get a list of fish types filtered by water type
   * @param waterType filter by water type
   * @returns A string array of fish types
   */
  static getFishTypesFn(waterType: string): string[] {
    if (!waterType || waterType.toLowerCase() == "all") {
      return FISH_TYPES.map((fishType) => fishType.name);
    } else {
      return FISH_TYPES.filter(
        (fishType) => fishType.waterType === waterType
      ).map((fishType) => fishType.name);
    }
  }
  //--------------------------------------------------------------------------------

  /**
   * Get a fish object by ID
   * @param fishId the fish ID
   * @returns the fish object
   */
  static getFishFn(fishId: number | string): Fish {
    return FISHIES.find((fish) => String(fish.id) === fishId);
  }
  //--------------------------------------------------------------------------------
}

export default FishDataRetrieval;
