import { useSelector, useDispatch } from "react-redux";
import { selectTasks, 
    toggleHideDone, 
    setAllDone, 
    fetchExampleTasks } from "../../tasksSlice";
import { ButtonsList, Button } from "./styled";

export const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ButtonsList>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
                        Pobierz przykładowe zadania
                    </Button>
                    {tasks.length > 0 && (
                        <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsList>
      
    )
};

export default Buttons;