
const initialState = {
  carts: [],
}

export function cartReducer (state = initialState, action) {
  switch (action.type) {
    case "ADD-ARTICLE":{
    //   {
    //     return {...state,carts: [...state.carts, action.payload]}
    // }
    // const index = state.carts.find((cart) => cart.id === action.payload.id)
    // if (index>=0) {
    //   state.carts[index].qty += 1
    // } else {
    //   const temp = { ...action.payload, qty: 2 }
    //   return {
    //     ...state,
    //     carts: [...state.carts, temp],
    //   }
    // }
    const itemInCart = state.carts.find((cart) => cart.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.carts.push({ ...action.payload, qty: 1 });
      }
    incrementQuantity= (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.qty++;
    },
    decrementQuantity= (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.qty= 1
      } else {
        item.qty--;
      }
    }
  }
    //   case "DELETE-ARTICLE":{
    //     let newState = [...state.carts] 
    //     let index = newState.findIndex(cart => cart.id ==! action.payload);
    //     newState.splice(index, 1);
    //     return {...state, carts: [...newState]};
    //   }

    // case "GET-USER-CART":{
    //   return {...state,carts: [...state.carts, action.payload]}
    // }
    
    default:
      return state
  }
}

// export default function (
//   incrementQuantity,
//   decrementQuantity
// )