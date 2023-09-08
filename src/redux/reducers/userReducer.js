const INITIAL_STATE = {
  cart: {},
  favorites: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  const {cart, favorites} = state;
  const newCart = {...cart};
  const newFavorites = {...favorites};
  const product = action?.payload?.product;

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {...cart, [product.id]: {...product, count: 1}},
      };
    case 'INCREMENT_PRODUCT':
      newCart[product.id].count += 1;
      return {
        ...state,
        cart: newCart,
      };
    case 'DECREMENT_PRODUCT':
      if (cart[product.id].count == 1) {
        delete newCart[product.id];
      } else {
        newCart[product.id].count -= 1;
      }
      return {
        ...state,
        cart: newCart,
      };
    case 'FAVORITE_TOGGLE':
      if (favorites[product.id]) {
        delete newFavorites[product.id];
      } else {
        newFavorites[product.id] = {...product};
      }
      return {
        ...state,
        favorites: newFavorites,
      };
    case 'UPDATE_CART':
      console.log('UPDATE_CART', action?.payload?.cart);
      return {
        ...state,
        cart: action?.payload?.cart,
      };
    case 'UPDATE_FAVORITES':
      return {
        ...state,
        favorites: action?.payload?.favorites,
      };
    default:
      return state;
  }
};

export default userReducer;
