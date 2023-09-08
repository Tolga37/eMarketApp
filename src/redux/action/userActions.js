const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});
const incrementProduct = payload => ({
  type: 'INCREMENT_PRODUCT',
  payload,
});
const decrementProduct = payload => ({
  type: 'DECREMENT_PRODUCT',
  payload,
});

const favoriteToggle = payload => ({
  type: 'FAVORITE_TOGGLE',
  payload,
});

const updateCart = payload => ({
  type: 'UPDATE_CART',
  payload,
});

const updateFavorites = payload => ({
  type: 'UPDATE_FAVORITES',
  payload,
});

export {
  addToCart,
  incrementProduct,
  decrementProduct,
  favoriteToggle,
  updateCart,
  updateFavorites,
};
