// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

// action creators
export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const incrementItem = (productId) => (dispatch) => {
  dispatch({
    type: INCREMENT_ITEM,
    payload: productId,
  });
};

export const decrementItem = (productId) => (dispatch) => {
  dispatch({
    type: DECREMENT_ITEM,
    payload: productId,
  });
};

export const removeItem = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: productId,
  });
};
