import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount(){
        // this.state.count = this.state.count + 1;
        // this.setState({ count: this.state.count + 1 })
        // console.log(this.state.count)
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    render() {
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </>
        )
    }
}

export default Counter