
const initialState = {
    categories:[],
    categoryArticles:[]
}

export function categoryReducer (state = initialState, action){
    switch (action.type) {
        case "GET-CATEGORIES": {
            return {...state,categories: action.payload}
        }
        case "GET-CAT-ARTICLES":{
            return {...state,categoryArticles:action.payload}
        }
        default:{
            return state
        }
            
    }

}