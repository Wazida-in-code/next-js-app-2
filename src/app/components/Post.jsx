import React from 'react';

const Post = ({ post }) => {
    return (
        <div className='p-3 border border-2 border-amber-900 rounded-md mb-4'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;