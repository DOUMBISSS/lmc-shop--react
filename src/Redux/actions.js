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

export function getAccessoires(articles){
    return{
        type:"GET-ACCESSOIRES-ARTICLES",
        payload :articles
    }
}