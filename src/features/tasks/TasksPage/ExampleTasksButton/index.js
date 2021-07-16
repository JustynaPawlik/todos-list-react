import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../Button";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";


export const ExampleTasksButtton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading ? "ładowanie..." : "Pobierz przykładowe zadania" 
            }
        </Button>
    );
};