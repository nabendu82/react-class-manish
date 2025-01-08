const ChildComponent = props => {
    return (
        <button onClick={() => props.greetHandler('Robin Hood Jr.')}>Greet Parent</button>
    )
}
export default ChildComponent
