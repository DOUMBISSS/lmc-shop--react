
const initialState = {
  carts: [],
}

export function cartReducer (state = initialState, action) {
  switch (action.type) {
    case "ADD-ARTICLE":{
    //   {
    //     return {...state,carts: [...state.carts, action.payload]}
    // }
    let index = state.carts.findIndex((cart) => cart.id === action.payload)
    if (index>=0) {
      state.carts[index].qty += 1
    }
      return {
        ...state,carts: [...state.carts, {...action.payload, qty: 1}],
      }
    }
      case "DELETE-ARTICLE":{
        let newState = [...state.carts] 
        let index = newState.findIndex(cart => cart.id === action.payload);
        newState.splice(index, 1);
        return {...state, carts: [...newState]};
      }

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