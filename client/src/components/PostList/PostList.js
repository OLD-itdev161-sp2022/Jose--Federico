import PostListItem from './PostListItem';
import React from 'react';

const PostList = props => {
    const { posts, clickPost } = props;
    return posts.map(post => (
        <PostListItem
            key={post._id}
            post={post}
            clickPost={clickPost}
            deletePost={deletePost}
        />
    ));
};

export default PostList;