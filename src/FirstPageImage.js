import "./FirstPageImage.css"

function FirstPageImage({ title, imageUrl, description, source, date}) {

    return (
        <div className="fp-ihp">
            <img className="frontpage-image" src={imageUrl} alt={title} />
            <h3 className="image-title">{title}</h3>
            <p>{description}</p>
            <div className="bottom">
                <p><strong>{source}</strong> | {date}</p>
                <div className="image-divider"></div>
            </div>
        </div>
    )
}

export default FirstPageImage