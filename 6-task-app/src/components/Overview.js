//Overview.js should just render our tasks

import uniqid from "uniqid";

const Overview = (props) => {

    const { tasks } = props;

    return (

        <div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={uniqid.time()}>{task.count}: {task.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Overview;