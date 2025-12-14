import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
} from "../actions/cartActions";

const initialState = {
  items: {}, // { [productId]: { product, qty } }
  totalItems: 0,
  totalPrice: 0,
};

function recalc(items) {
  let totalItems = 0;
  let totalPrice = 0;
  Object.values(items).forEach(({ product, qty }) => {
    totalItems += qty;
    totalPrice += product.price * qty;
  });
  return { totalItems, totalPrice };
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const items = { ...state.items };
      if (!items[product.id]) {
        items[product.id] = { product, qty: 1 };
      } else {
        items[product.id] = { product, qty: items[product.id].qty + 1 };
      }
      const totals = recalc(items);
      return { ...state, items, ...totals };
    }

    case INCREMENT_ITEM: {
      const id = action.payload;
      const items = { ...state.items };
      if (items[id]) {
        items[id] = { ...items[id], qty: items[id].qty + 1 };
      }
      const totals = recalc(items);
      return { ...state, items, ...totals };
    }

    case DECREMENT_ITEM: {
      const id = action.payload;
      const items = { ...state.items };
      if (items[id]) {
        const newQty = items[id].qty - 1;
        if (newQty <= 0) {
          delete items[id];
        } else {
          items[id] = { ...items[id], qty: newQty };
        }
      }
      const totals = recalc(items);
      return { ...state, items, ...totals };
    }

    case REMOVE_ITEM: {
      const id = action.payload;
      const items = { ...state.items };
      if (items[id]) {
        delete items[id];
      }
      const totals = recalc(items);
      return { ...state, items, ...totals };
    }

    default:
      return state;
  }
}
