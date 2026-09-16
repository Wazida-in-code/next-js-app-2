import React from 'react';
import Post from '../components/Post';

const PostsPage = async() => {   
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json()

    return (
        <div>
            <h1>Posts Length: {posts.length}</h1>

            <div className='grid grid-cols-3 gap-4'>
                {posts.map(post => <Post key={post.id} post={post}></Post>)}
            </div>
        </div>
    );
};

export default PostsPage;   