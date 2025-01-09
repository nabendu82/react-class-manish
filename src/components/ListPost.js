import React, { Component } from 'react'
import Post from './Post';

class ListPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const posts = await res.json();
        console.log(posts)
        this.setState({ posts })
    }

    render() {
        const { posts } = this.state;
        return posts.map(post => <Post key={post.id} post={post} />)
    }
}

export default ListPost
