import Form from "./Form";
import TaskList from "./TaskList";
import Header from "../../../common/Header";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Search from "./Search";
import { ExampleTasksButtton } from "./ExampleTasksButton";

function TasksPage() {
 
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        button={<ExampleTasksButtton />}
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList/>}
        extraHeaderConntent={<Buttons />}
      />
    </Container>
    
  );
}

export default TasksPage;

