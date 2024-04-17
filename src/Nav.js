import './Nav.css'
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
    const [linkText, setLinkText] = useState("")
    const [path, setPath] = useState("")
    const location = useLocation();

    function switchLink() {
        if (location.pathname === "/" || location.pathname.startsWith("/scientist/")) {
            setLinkText("Browse All Scientists")
            setPath("/scientists")
        } else {
            setLinkText("Back Home")
            setPath("/")
        }
    }

    useEffect(() => {
        switchLink()
    })

    return (
        <>
            <nav>
                <Link to="/">
                    <h1>She's a Scientist</h1>
                </Link>
                <Link className="underline" to={path}>{linkText}</Link>
            </nav>
            <div className="divider"></div>
        </>
    )
}

export default Nav