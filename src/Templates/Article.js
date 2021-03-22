import React from 'react';

const Article = ({title, author, text}) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{text}</p>
            <span>Autor: {author}</span>
        </article>
    );
};

export default Article;
