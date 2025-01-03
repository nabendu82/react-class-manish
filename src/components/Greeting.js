const Greeting = (props) => {
    console.log(props)
    return (
        <>
            <h3>{props.name} created in {props.year}</h3>
            <p>{props.children}</p>
        </>
    )
}

export default Greeting