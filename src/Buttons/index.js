import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
        <div className="buttons">
            {tasks.length > 0 && (
                <>
            <button className="buttons__button buttons__button-done">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
            <button
                className="buttons__button buttons__button--hidden"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
        </button>
        </>
        )}
            
        </div>
        
);


export default Buttons;