import Game from "./interfaces/game-interface";
import GameScreenshot from "./interfaces/game-screenshot-interface";
import GamesResult from "./interfaces/games-result-interface";

export default class RawgApiWrapper {
  url: string;
  apiKey: string;

  constructor(apiKey: string) {
    this.url = "https://api.rawg.io/api/";
    this.apiKey = apiKey;
  }

  appendKey(string: string) {
    return `${string}&key=${this.apiKey}`;
  }

  async getGames(
    page?: number,
    pageSize?: number,
    search?: string
  ): Promise<GamesResult[] | undefined> {
    try {
      const response = await fetch(
        this.appendKey(
          `https://api.rawg.io/api/games?page=${page ? page : 1}&page_size=${
            pageSize ? pageSize : 20
          }&search=${search ? search : ""}`
        ),
        { mode: "cors" }
      );
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  async getGame(id: number): Promise<Game | undefined> {
    try {
      const response = await fetch(
        this.appendKey(`https://api.rawg.io/api/games/${id}?`),
        { mode: "cors" }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  async getGameScreenshots(id: number): Promise<GameScreenshot[] | undefined> {
    try {
      const response = await fetch(
        this.appendKey(`https://api.rawg.io/api/games/${id}/screenshots?`),
        { mode: "cors" }
      );
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
}
