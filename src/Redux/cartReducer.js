
const initialStore = {
  carts: [],
}

export function cartReducer (state = initialStore, action) {
  switch (action.type) {
    case "ADD-ARTICLE":
      return {...state,carts: [...state.carts, action.payload]}
      
      case "DELETE-ARTICLE":{
        let newState = [...state.carts] 
        let index = newState.findIndex(cart => cart.id == action.payload);
        newState.splice(index, 1);
        return {...state, carts: [...newState]};
      }

    default:
      return state
  }
}
