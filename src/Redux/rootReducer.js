import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { homeArticleReducer } from "./homeArticleReducer";
import { accessoireReducer } from "./accessoireReducer";


export const rootReducer = combineReducers({
    homeArticleReducer : homeArticleReducer,
    categoryReducer : categoryReducer,
    accessoireReducer : accessoireReducer
}) 