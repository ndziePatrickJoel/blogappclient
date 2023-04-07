import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";


const ArticlePage = () => {

    const params = useParams();
    const { articleId } = params;

    const article = articles.find(article => article.name === articleId);

    if(!article)
    {
        return <NotFoundPage/>;
    }

    return (
        <>
            <h1>{article.id}</h1>
            {
                article.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))
            }
        </>
    );
}


export default ArticlePage;