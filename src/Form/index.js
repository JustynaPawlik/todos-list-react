import { useState, useRef } from "react";
import { FormElement, FormButton, FormInput } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <FormElement onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                ref={inputRef}
                type="text"
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton onClick={focusInput}>Dodaj zadanie</FormButton>
        </FormElement>
    );
};
export default Form;