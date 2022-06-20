import SearchInput from "components/main-page/SearchInput";

export default function Header() {
  return (
    <header className="bg-slate-600">
      <div className="lg:container lg:mx-auto px-12 py-4 text-white">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extrabold">Logo</div>
          <div>
            <SearchInput />
          </div>
          <div>Cart</div>
        </div>
      </div>
    </header>
  );
}
