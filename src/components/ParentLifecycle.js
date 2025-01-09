import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle'

class ParentLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ParentLifecycle'
        }
        console.log('ParentLifecycle constructor')
    }

    componentDidMount(){
        console.log('ParentLifecycle componentDidMount')
    }

    componentDidUpdate(){
        console.log('ParentLifecycle componentDidUpdate')
    }

    render() {
        console.log('ParentLifecycle render')
        return (
            <>
                <h1>ParentLifecycle</h1>
                <button onClick={() => this.setState({ name: 'Nabendu' })}>Change State</button>
                <ChildLifecycle />
            </>
        )
    }
}

export default ParentLifecycle
