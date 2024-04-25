import "./MissionStatement.css";
import { Link } from "react-router-dom";

function MissionStatement() {

    return (
        <div id="ms-div">
            <h2 id="ms-h2">Our mission</h2>
            <p><i>she's a scientist©</i> was created in 2024 with the mission to spotlight the remarkable careers of female scientists whose contributions have shaped technology, medicine, and life as we know it. These pioneering women, alongside countless others, blazed trails for present-day women scientists, myself included. Despite the persistent underrepresentation of women across STEM fields, their collective impact has been instrumental in narrowing this gap, a legacy as significant as the implications of their work. It's my hope that <i>she's a scientist©</i> serves as both an inspiration for aspiring young women to pursue careers in science and a heartfelt tribute to all women who have dedicated their lives to the pursuit of knowledge.</p>
            <p>In memory of my grandmother, <Link className="ms-link" to="https://en.wikipedia.org/wiki/Margaret_Oakley_Dayhoff">Margaret Oakley Dayhoff</Link>, who gave amino acids their single-letter codes. Your legacy resonates in all 20 of them.</p>
            <Link className="ms-link" to="/scientists">Browse scientists</Link>
        </div>
    )
}

export default MissionStatement