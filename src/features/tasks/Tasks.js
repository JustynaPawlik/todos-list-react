import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Form from "./Form";
import TaskList from "./TaskList";
import Header from "../../common/Header";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { GlobalStyle } from "../../GlobalStyle";

function Tasks() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList/>}
        extraHeaderConntent={<Buttons />}
      />
    </Container>
    </ThemeProvider>
  );
}

export default Tasks;
