import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone, 
    setAllDone, 
    fetchExampleTasks,
    selectAreTasksEmpty, 
    selectIsEveryTaskDone, 
    selectHideDone  } from "../../tasksSlice";
import { ButtonsList, Button } from "./styled";

export const Buttons = () => {
    
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

    return (
        <ButtonsList>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
                        Pobierz przykładowe zadania
                    </Button>
                    {!areTasksEmpty && (
                        <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone} 
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsList>
      
    )
};

export default Buttons;