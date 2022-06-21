import { Cart, CartItem } from "components/cart/cart";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";

interface AppContext {
  rawgApiWrapper: RawgApiWrapper;
  cart: Cart;
  addGameToCart: (game: CartItem) => void;
  removeGameFromCart: (gameId: number) => void;
}
export default AppContext;
