import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { List, Item, Content, Button } from "./styled";
import { 
    selectTasks, 
    toggleTaskDone, 
    removeTask, 
    selectHideDone,
    selectTasksByQuery
 } from "../../tasksSlice";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");


    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const dispatch = useDispatch();
    const hideDone = useSelector(selectHideDone);

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <Button
                        remove onClick={() => dispatch(removeTask(task.id))}>
                        &#128465;
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;