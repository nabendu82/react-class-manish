import React, { Component } from 'react'
import { UserConsumer } from './useContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <>
                            <h1>Child</h1>
                            <h3>Hello {user}</h3>
                        </>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
