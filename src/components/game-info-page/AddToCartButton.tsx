import { Cart, CartItem } from "components/cart/cart";
import Game from "rawg-api-wrapper/interfaces/game-interface";

const AddToCartButton = (props: {
  game: Game;
  cart: Cart;
  addGameToCart: (game: CartItem) => void;
}) => {
  if (props.cart.itemInCart(props.game.id)) {
    return (
      <button className="py-2 bg-green-300 rounded-lg hover:bg-green-400">
        Game in cart!
      </button>
    );
  }

  return (
    <button
      className="py-2 bg-slate-100 rounded-lg hover:bg-slate-200"
      onClick={() => {
        props.addGameToCart(props.game);
      }}
    >
      Add to cart
    </button>
  );
};
export default AddToCartButton;
