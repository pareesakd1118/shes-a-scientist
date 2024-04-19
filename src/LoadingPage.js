import "./LoadingPage.css"
import beaker from "../src/assets/beaker.png"

function LoadingPage() {

    return (
        <div className='loading-container'>
            <h1>loading...</h1>
            <img className='beaker' src={beaker} />
        </div>
    )
}

export default LoadingPage