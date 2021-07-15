import "core-js/stable";
import "regenerator-runtime/runtime";
import FishDataRetrieval from "./FishDataRetrieval";

class Fish {
  //Fish properties
  id: number;
  name: string;
  scientificName: string;
  media: string[];
  waterType: string;
  type: string;
  url: string;
  //--------------------------------------------------------------------------------

  constructor() {}
  //--------------------------------------------------------------------------------

  /**
   * Async function to get a list of fish filtered by fish type, water type, and fish name.
   * @param fishType filter by fish type
   * @param waterType filter by water type
   * @param searchTerm filter by fish name
   * @returns An array of fish objects
   */
  static async getFishArray(
    fishType: string,
    waterType: string,
    searchTerm: string
  ): Promise<Fish[]> {
    const fishArray = await Promise.resolve(
      FishDataRetrieval.getFishArrayFn(fishType, waterType, searchTerm)
    );
    return fishArray;
  }
  //--------------------------------------------------------------------------------

  /**
   * Async function to get a list of fish types filtered by water type
   * @param waterType filter by water type
   * @returns A string array of fish types
   */
  static async getFishTypes(waterType: string): Promise<string[]> {
    const fishTypes = await Promise.resolve(
      FishDataRetrieval.getFishTypesFn(waterType)
    );
    return fishTypes;
  }
  //--------------------------------------------------------------------------------

  /**
   * Async function to get a fish object by ID
   * @param fishId the fish ID
   * @returns the fish object
   */
  static async getFish(fishId: string | number): Promise<Fish> {
    const fish = await Promise.resolve(FishDataRetrieval.getFishFn(fishId));
    return fish;
  }
  //--------------------------------------------------------------------------------
}

export default Fish;
