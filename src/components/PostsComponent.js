import React from 'react'
import { StateContext } from '../App'

export default function PostsComponent() {

    let { posts } = React.useContext(StateContext).state

    return (
        <div>
            {posts.length > 0 ? <>
                {posts.map(item => {
                    return (
                        <div key={item.id}>
                            <h3>{item.id}. {item.title}</h3>
                        </div>
                    )
                })}
            </> : <h4>No data.. click getPosts button to show posts</h4>}
        </div>
    )
}
