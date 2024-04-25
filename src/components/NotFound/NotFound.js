import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div id="nf-div">
            <h2 id="nf-h2">Uh oh, this page does not exist.</h2>
            <Link id="nf-link" to="/">Back home</Link>
        </div>
    )
}

export default NotFound