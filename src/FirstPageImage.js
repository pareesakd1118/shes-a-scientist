import "./FirstPageImage.css";
import { Link } from "react-router-dom";

function FirstPageImage({ title, imageUrl, description, source, date, wikilink}) {

    return (
        <div className="fp-ihp">
            <img className="frontpage-image" src={imageUrl} alt={title} />
            <Link to={wikilink}>
                <h3 className="image-title">{title}</h3>
            </Link>
            <p id="fp-desc">{description}</p>
            <div className="bottom">
                <p><strong>{source}</strong> | {date}</p>
                <div className="image-divider"></div>
            </div>
        </div>
    )
}

export default FirstPageImage