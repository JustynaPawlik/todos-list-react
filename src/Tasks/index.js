import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li className={`<li className="
            list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`}>
                <button className="list__button list__button--done">
                    {task.done ? "✓" : ""}
            </button>
            <span className={`list__content${task.done ? " list__content--done" : ""}`}>
            {task.content}
            </span >
        <button className="list__button list__button--remove">&#128465;</button>
            </li>
        ))}
    </ul>
);

export default Tasks;