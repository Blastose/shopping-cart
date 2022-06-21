interface CartItem {
  name: string;
  id: number;
}

class Cart {
  items: CartItem[];
  constructor(items?: CartItem[]) {
    if (items) {
      this.items = items;
    } else {
      this.items = [];
    }
  }

  itemInCart(id: number): boolean {
    return this.items.some((item) => {
      return item.id === id;
    });
  }

  addItemToCart(item: CartItem) {
    if (!this.itemInCart(item.id)) {
      this.items.push(item);
    }

    return this.items;
  }

  removeItemFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    return this.items;
  }
}
export { Cart };
export type { CartItem };
