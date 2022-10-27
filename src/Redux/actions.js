export function getHomeArticle(articles){
    return{
        type:"GET-HOMES-ARTICLES",
        payload :articles
    }
}

export function getArticle(article){
  return{
      type:"GET-ARTICLE",
      payload :article
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

export function AddArticle (id) {
    return {
      type: "ADD-ARTICLE",
      payload: id,
    }
  }

  export function DeleteArticle(id){
    return {
      type: "DELETE-ARTICLE",
      payload: id,
    }
  }

export function AddCart(id){
  return {
    type:"ADD-CART",
    payload :id
  }
}