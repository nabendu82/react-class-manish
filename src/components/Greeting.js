const Greeting = (props) => {
    const { name, year, children } = props;
    
    return (
        <>
            <h3>{name} created in {year}</h3>
            <p>{children}</p>
        </>
    )
}

export default Greeting