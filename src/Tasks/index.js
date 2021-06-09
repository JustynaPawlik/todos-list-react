import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`<li className="
            tasks__item${task.done && hideDoneTasks ? " tasks__item--hidden" : ""}`}>
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span >
                <button className="tasks__button tasks__button--remove">&#128465;</button>
            </li>
        ))}
    </ul>
);

export default Tasks;