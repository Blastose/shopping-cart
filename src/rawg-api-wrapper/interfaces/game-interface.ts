import Genre from "./genre-interface";

export default interface Game {
  id: number;
  name: string;
  description: string;
  description_raw: string;
  metacritic: number;
  released: string;
  tba: boolean;
  background_image: string;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  genres: Genre[];
  parent_platforms: { id: number; name: string }[];
}
