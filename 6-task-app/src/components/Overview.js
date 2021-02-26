//Overview.js should just render our tasks

import uniqid from "uniqid";

const Overview = (props) => {

    const { tasks } = props;

    return (

        <div>
            <ol>
                {tasks.map((task) => {
                    return (
                        <li key={uniqid.time()}>{task}</li>
                    )
                })}
            </ol>
        </div>
    );

}

export default Overview;