import { useState } from "react";
import { useTasks } from "../../useTasks";
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
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderConntent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
    </ThemeProvider>
  );
}

export default Tasks;
