import { ButtonsList, Button } from "./styled";

export const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsList>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone} >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonsList>
);

export default Buttons;