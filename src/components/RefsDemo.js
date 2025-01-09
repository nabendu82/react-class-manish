import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef();
        this.commentRef = React.createRef();
    }

    componentDidMount(){
        this.nameRef.current.focus();
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.nameRef.current.value)
        console.log(this.commentRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" ref={this.nameRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo
