import Genre from "./genre-interface";

export default interface GamesResult {
  id: number;
  name: string;
  released: string;
  background_image: string;
  raiting: number;
  tba: boolean;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  genres: Genre[];
  parent_platforms: { id: number; name: string }[];
}
