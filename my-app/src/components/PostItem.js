import React from 'react'
import css from "./css/PostItem.module.css"

function PostItem(props) {

    const savedPosts = props.savedPosts

    return (
        props.savedPosts.map(post => {
            return (
                <div className={css.SearchItem} key={post.title}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt="post" />
                    <p>{post.description}</p>
                </div>
            )
        })
    )
}

export default PostItem