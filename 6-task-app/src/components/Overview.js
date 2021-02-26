//Overview.js should just render our tasks

const Overview = (props) => {

    const { tasks, onDelete } = props;

    return (
        <div>
            <ul>
                {tasks.map((task,idx) => {
                    return (
                        <li key={task.id} id={task.id}>{idx+1}: {task.name} <i onClick={onDelete} className="fas fa-trash-alt" ></i></li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Overview;