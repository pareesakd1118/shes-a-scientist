import "./AllScientists.css"
import Scientist from "./Scientist"
import Link from "react-router-dom";

function AllScientists({ dataSet }) {

    const allScientists = dataSet.map(data => {
        return (
            <Link to={`/scientist/${id}`}>
                <Scientist 
                id={data.id}
                name={data.name}
                image={data.image}
                field={data.field}
                key={data.id}
                accomplishment={data.accomplishment}
                />
            </Link>
        )
    })

    return (
        <div className="scientist-container">
            {allScientists}
        </div>
    )
}

export default AllScientists