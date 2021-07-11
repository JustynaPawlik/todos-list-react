import styled, { ThemeProvider } from "styled-components";
import Form from "./Form";
import TaskList from "./TaskList";
import Header from "../../../common/Header";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { TaskPage } from "../TaskPage";
import Search from "./Search";

function TasksPage() {
 
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
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

