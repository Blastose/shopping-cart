import AppContext from "components/main-page/app-context-interface";
import { useOutletContext } from "react-router-dom";
import CartItemView from "./CartItemView";

const CartCheckout = () => {
  const context = useOutletContext() as AppContext;
  const cart = context.cart;

  return (
    <main className="bg-slate-400 flex-1 flex">
      <div className="lg:container lg:mx-auto py-6 px-4 duration-300">
        <span className="font-bold text-2xl">Cart</span>
        <div className="flex flex-col gap-4">
          {cart.items.map((item, index) => {
            return (
              <CartItemView
                key={`${item.id}${index}`}
                item={item}
                removeHandler={context.removeGameFromCart}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CartCheckout;
