export function getHomeArticle(articles){
    return{
        type:"GET-HOMES-ARTICLES",
        payload :articles
    }
}


export function getCategoryArticles(articles){
    return{
        type:"GET-CAT-ARTICLES",
        payload :articles
    }
}

export function getCategory (categories){
    return{
        type : "GET-CATEGORIES",
        payload : categories
    }
}

