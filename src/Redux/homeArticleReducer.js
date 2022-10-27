
const initialState = {
    homeArticles:[],
    article : {}
}

export function homeArticleReducer (state = initialState, action){
    switch (action.type) {
        case "GET-HOMES-ARTICLES": {
            return {...state,homeArticles: action.payload}
        }
        case "GET-ARTICLE": {
            return {...state,article: action.payload}
        }
        default :{
            return state
        }
    }
}