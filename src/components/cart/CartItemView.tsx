import { Link } from "react-router-dom";
import { CartItem } from "./cart";

const CartItemView = (props: {
  item: CartItem;
  removeHandler: (id: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-1 text-white">
      <Link
        to={`/games/${props.item.id}`}
        className="bg-slate-500 p-2 rounded-md hover:bg-slate-600"
      >
        <div>{props.item.name}</div>
        <div>${props.item.id}</div>
      </Link>
      <button
        onClick={() => props.removeHandler(props.item.id)}
        className="p-2 bg-slate-700 text-white rounded-xl"
      >
        Remove from cart
      </button>
    </div>
  );
};

export default CartItemView;
