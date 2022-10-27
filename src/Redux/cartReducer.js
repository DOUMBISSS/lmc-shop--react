
const initialState = {
  carts: [],
}

export function cartReducer (state = initialState, action) {
  switch (action.type) {
    case "ADD-ARTICLE":{
      return {...state,carts: [...state.carts, action.payload]}
    }

      case "DELETE-ARTICLE":{
        let newState = [...state.carts] 
        let index = newState.filter(cart => cart.id == action.payload);
        newState.splice(index, 1);
        return {...state, carts: [...newState]};
      }
    
    default:
      return state
  }
}
