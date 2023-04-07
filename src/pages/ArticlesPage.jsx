import React from "react";
import articles from "./article-content";
import ArticlesListComponent from "../components/ArticlesListComponent";


const ArticlesPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesListComponent articles={articles}/>
        </>
    );
}


export default ArticlesPage;