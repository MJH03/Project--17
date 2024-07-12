import * as React from "react";
import tasks from './tasks.js';
import FancyText from './FancyText.js'

export default function TaskGenerator({children}) {

    const [index, setIndex] = React.useState([0]);
    const task = tasks[index];
    const nextTask = () => setIndex((index+1) % tasks.length)

    return (
        <div>
            <p className="header">Todays Tasks:</p>
            <FancyText text={task.name}/>
            <label name="taskCompletion">Pending...</label>
            <input type="checkbox" name="taskCompletion" onClick={() => {
                alert("Completed✔︎")
            }}></input>
            <button onClick={nextTask}>Next</button>
            {children}
        </div>
    )
}