import './Nav.css'
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
    const [linkText, setLinkText] = useState("")
    const [path, setPath] = useState("")
    const [favLinkText, setFavLinkText] = useState("")
    const [favPath, setFavPath] = useState("")
    const location = useLocation();

    function switchLink() {
        if (location.pathname === "/" || location.pathname.startsWith("/scientist/")) {
            setLinkText("Browse all scientists")
            setPath("/scientists")
        } else {
            setLinkText("Back home")
            setPath("/")
        }
    }

    useEffect(() => {
        switchLink()
    })

    function switchFavLink() {
        if (location.pathname === "/favorites") {
            setFavLinkText("Browse all scientists")
            setFavPath("/scientists")
        } else {
            setFavLinkText("Favorite scientists")
            setFavPath("/favorites")
        }
    }

    useEffect(() => {
        switchFavLink()
    })

    return (
        <>
            <nav>
                <Link to="/">
                    <h1>she's a scientist</h1>
                </Link>
                <div id="nav-links">
                    <Link className="underline" to={path}>{linkText}</Link>
                    <div className="vertical-divider"></div>
                    <Link className="underline" to={favPath}>{favLinkText}</Link>
                </div>
            </nav>
            <div className="divider"></div>
        </>
    )
}

export default Nav