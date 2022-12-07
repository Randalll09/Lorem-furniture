import { atom, selector } from 'recoil';

const loginState = atom({
  key: 'loginState',
  default: false,
});

const cartState = atom({
  key: 'cartState',
  default: [],
});

const total = selector({
  key: 'total',
  get: ({ get }) => {
    const cart = get(cartState);
    if (cart) {
      let amount = 0;
      cart.map((el) => {
        if (el.sale) {
          amount = parseInt((el.price / 100) * (100 - el.sale)) + amount;
        } else {
          amount = amount + el.price;
        }
      });
      return amount;
    }
  },
});

export { loginState, cartState, total };
