import "./Scientist.css"

function Scientist({ id, name, image, field, accomplishment }) {

    return (
        <div className="scientist" id={id}>
            <h3>{name}</h3>
            <div className="image-container">
                <img className="grid-image" src={image} alt={`${name}`} />
                <div className="overlay">
                    <p className="text">{accomplishment}</p>
                </div>
            </div>
            <p>{field}</p>
        </div>
    )
}

export default Scientist