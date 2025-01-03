import { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <>
                <h2>Welcome to {this.props.name}</h2>
                <p>{this.props.children}</p>
            </>
        )
    }
}

export default Welcome
