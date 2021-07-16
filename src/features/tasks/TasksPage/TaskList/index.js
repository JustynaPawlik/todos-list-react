import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { 
    toggleTaskDone, 
    removeTask, 
    selectHideDone,
    selectTasksByQuery
 } from "../../tasksSlice";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove 
                        onClick={() => dispatch(removeTask(task.id))}>
                        &#128465;
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;