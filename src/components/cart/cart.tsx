class Cart {
  items: { name: string; price: string; id: number }[];
  constructor() {
    this.items = [];
  }

  addItemToCart(item: { name: string; price: string; id: number }) {
    this.items.push(item);
  }

  removeItemFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
export default Cart;
