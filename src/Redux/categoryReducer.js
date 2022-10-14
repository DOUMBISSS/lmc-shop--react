
const initialState = {
    categoryArticles:[],
}

export function categoryReducer (state = initialState, action){
    switch (action.type) {
        case "GET-CAT-ARTICLES": {
            return {...state,categoryArticles: action.payload}
        }
        default :{
            return state
        }
    }
}