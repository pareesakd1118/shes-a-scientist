import "./Scientist.css"

function Scientist({ id, name, image, field, accomplishment }) {

    return (
        <div className="scientist" id={id}>
            <h3 id="sci-name">{name}</h3>
            <div className="image-container">
                <img className="grid-image" src={image} alt={`${name}`} />
                <div className="overlay">
                    <p className="text">{accomplishment}</p>
                </div>
            </div>
            <p className="field-text">{field}</p>
        </div>
    )
}

export default Scientist