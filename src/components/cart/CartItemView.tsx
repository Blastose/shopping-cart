import { CartItem } from "./cart";

const CartItemView = (props: {
  item: CartItem;
  removeHandler: (id: number) => void;
}) => {
  return (
    <div className="flex flex-col">
      <div>{props.item.name}</div>
      <div>${props.item.id}</div>
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
