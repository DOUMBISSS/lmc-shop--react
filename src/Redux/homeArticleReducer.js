
const initialState = {
    homeArticles:[]
}

export function homeArticleReducer (state = initialState, action){
    switch (action.type) {
        case "GET-HOMES-ARTICLES": {
            return {...state,homeArticles: action.payload}
        }
        default :{
            return state
        }
    }
}