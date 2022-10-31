import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { homeArticleReducer } from "./homeArticleReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    homeArticleReducer : homeArticleReducer,
    categoryReducer : categoryReducer,
    cartReducer : cartReducer,
    userReducer :userReducer
}) 