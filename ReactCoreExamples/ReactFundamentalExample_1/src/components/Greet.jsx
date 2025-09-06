

function Greet(props) {
    return (
        <div>
            <h3> Hello {props.name} a.k.a {props.heroName}</h3>
            {props.children}
        </div>
    )
}

export default Greet;


