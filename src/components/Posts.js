import React from 'react';
import { GET_POSTS } from './type'
import { stateContext } from '../App'
import { getPosts } from './reducer'

function Posts() {

    let { posts, dispatch } = React.useContext(stateContext)

    return (
        <div>
            <button type="button" onClick={() => getPosts(dispatch, GET_POSTS)}>Get Posts</button>
            <hr />
            {posts ? posts.map((item, index) => {
                return (
                    <h6 key={index}>{item.title}</h6>
                )
            }) : <h2>No Data</h2>}
        </div>
    )
};

export default Posts;