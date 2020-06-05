import React from 'react';

const Post = ({title, body, clicked}) => (
    <article style={{margin: '10px', border: '1px solid green'}} onClick={clicked}>
        <p>{title&&title}</p>
    </article>
)

export default Post;