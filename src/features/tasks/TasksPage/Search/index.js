import Input from '../../Input';
import { useHistory, useLocation } from "react-router-dom";


export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj")

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Input 
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
        />
    );
};