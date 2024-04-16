import "./AllScientists.css"
import Scientist from "./Scientist"

function AllScientists({ dataSet }) {

    const allScientists = dataSet.map(data => {
        return (
            <Scientist 
            id={data.id}
            name={data.name}
            image={data.image}
            field={data.field}
            key={data.id}
            accomplishment={data.accomplishment}
            />
        )
    })

    return (
        <div className="scientist-container">
            {allScientists}
        </div>
    )
}

export default AllScientists