import "./Scientist.css"

function Scientist({ id, name, image, field }) {

    return (
        <div className="scientist" id={id}>
            <h3>{name}</h3>
            <img src={image} alt={`${name}`} />
            <p>{field}</p>
        </div>
    )
}

export default Scientist