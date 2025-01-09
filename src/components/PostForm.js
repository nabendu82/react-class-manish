import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        try {
            const res = await fetch(url, settings);
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { userId, title, body } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userId">UserId </label>
                    <input type="text" id="userId" name="userId" value={userId} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" name="title" value={title} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body </label>
                    <textarea id="body" name="body" value={body} onChange={this.handleChange}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
