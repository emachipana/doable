import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import TaskCard from "../components/TaskCard";
import { createTask, getTasks } from "../services/task-service";
import { colors } from "../styles/colors";
import { Container, Division, LoaderContainer, Section, Tasks } from "./ui";

function HomePage() {
  const initialValues = {
    title: "",
    date: "",
    isValid: false
  }
  const [tasks, setTasks] = useState([]);
  const [temp, setTemp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data);
      setTemp(data);
      setTimeout(() => {setIsLoading(false)}, 200);
    });
  }, []);

  function handleChange(e) {
    setFormValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
      isValid: e.target.name === "title" ? (e.target.value !== "" ? true : false) : values.isValid
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, date } = formValues;
    const data = {
      title,
      due_date: date
    }

    createTask(data).then(newTask => {
      setTasks(tasks => [...tasks, newTask]);
      setFormValues(initialValues);
    });
  }

  function handleSort(e) {
    let newTasks;
    if(e.target.value === "alpha") {
      newTasks = tasks.sort((a, b) => a.title.localeCompare(b.title)).map(task => ({...task, new: ""}));
    }else if(e.target.value === "none") {
      newTasks = temp;
    }else {
      newTasks = tasks.filter(task => !!task.due_date);
    }
    setTasks(newTasks);
  }

  function handleShow(e) {
    let newTasks;
    if(e.target.id === "pending") {
      newTasks = temp.filter(task => !task.completed);
    }else {
      newTasks = temp.filter(task => task.important);
    }
    setTasks(newTasks);
  }

  return (
    <Container>
      <Section>
        <span>Sort</span>
        <Input onChange={handleSort} type="select" defaultValue="none" style={{maxWidth: "230px"}}>
          <option value="none">Select one...</option>
          <option value="alpha">Alphabetical (a-z)</option>
          <option value="date">Due Date</option>
        </Input>
      </Section>
      <Section>
        <span>Show</span>
        <Division>
          <FormGroup check>
            <Input
              id="pending"
              type="radio"
              name="show"
              onChange={handleShow}  
            />
            <Label htmlFor="pending" check style={{fontSize: "14px"}}>Only Pending</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="important"
              type="radio"
              name="show"
              onChange={handleShow}
            />
            <Label htmlFor="important" check style={{fontSize: "14px"}}>Only Important</Label>
          </FormGroup>
        </Division>
      </Section>
      {
        isLoading
        ?
        <LoaderContainer>
          <ScaleLoader
            size={100}
            color={colors.blue.normal}
          />
        </LoaderContainer>
        :
        <Tasks>
          {
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                date={task.due_date}
                completed={task.completed}
                important={task.important}
                handleTasks={setTasks}
              />
            ))
          }
        </Tasks>
      }
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            type="text"
            placeholder="do the dishes..."
            value={formValues.title}
            name="title"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type="date"
            placeholder="mm/dd/yyyy"
            value={formValues.date}
            name="date"
            onChange={handleChange}
          />
        </FormGroup>
        <Button 
          block
          color="primary"
          disabled={!formValues.isValid}
        >
          Add Task
        </Button>
      </Form>
    </Container>
  )
}

export default HomePage;
