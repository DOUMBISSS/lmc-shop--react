import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { homeArticleReducer } from "./homeArticleReducer";


export const rootReducer = combineReducers({
    homeArticleReducer : homeArticleReducer,
    categoryReducer : categoryReducer,
}) 