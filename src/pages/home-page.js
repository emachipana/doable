import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import TaskCard from "../components/TaskCard";
import { Container, Division, Section, Tasks } from "./ui";

function HomePage() {
  return (
    <Container>
      <Section>
        <span>Sort</span>
        <Input type="select" style={{maxWidth: "230px"}}>
          <option value="alpha">Alphabetical (a-z)</option>
          <option value="date">Due Date</option>
          <option value="importance">Importance</option>
        </Input>
      </Section>
      <Section>
        <span>Show</span>
        <Division>
          <FormGroup check>
            <Input type="checkbox"/>
            <Label check style={{fontSize: "14px"}}>Only Pending</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check style={{fontSize: "14px"}}>Only Important</Label>
          </FormGroup>
        </Division>
      </Section>
      <Tasks>
        <TaskCard date="asd"/>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard date="asdasd"/>
        <TaskCard />
        <TaskCard />
      </Tasks>
      <Form>
        <FormGroup>
          <Input type="text" placeholder="do the dishes..."/>
        </FormGroup>
        <FormGroup>
          <Input type="date"/>
        </FormGroup>
        <Button 
          block
          color="primary"
        >
          Add Task
        </Button>
      </Form>
    </Container>
  )
}

export default HomePage;
