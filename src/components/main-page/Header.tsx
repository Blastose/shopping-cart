import Cart from "components/cart/cart";
import SearchInput from "components/main-page/SearchInput";
import { Link } from "react-router-dom";

export default function Header(props: { cart: Cart }) {
  return (
    <header className="bg-slate-600">
      <div className="lg:container lg:mx-auto px-12 py-4 text-white">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extrabold">
            <Link to="/">Game Store</Link>
          </div>
          <div>
            <SearchInput />
          </div>
          <div>Cart - {props.cart.items.length}</div>
        </div>
      </div>
    </header>
  );
}
