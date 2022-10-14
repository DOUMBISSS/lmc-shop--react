const initialState = {
    accessoires:[],
}

export function accessoireReducer (state = initialState, action){
    switch (action.type) {
        case "GET-ACCESSOIRES-ARTICLES": {
            return {...state,accessoires: action.payload}
        }
        default :{
            return state
        }
    }
}