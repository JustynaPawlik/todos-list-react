import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonsList } from "../../Button";
import {
    toggleHideDone, 
    setAllDone, 
    selectAreTasksEmpty, 
    selectIsEveryTaskDone, 
    selectHideDone  } from "../../tasksSlice";

export const Buttons = () => {
    
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

    return (
        <ButtonsList>
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