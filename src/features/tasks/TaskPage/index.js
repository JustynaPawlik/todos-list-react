import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";



export const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    
    return (
      <Container>
        <Header title="Szczegoły zadania" />
        <Section
          title={id}
          body={<>naan </>}
        />
      </Container>
      
    );
  };



  