import { FormGroup, Input, Label } from "reactstrap";
import { Section, Division } from "./styles";
import { BsExclamationCircleFill } from "react-icons/bs";
import { colors } from "../../styles/colors";
import { updateTask } from "../../services/task-service";
import { useState } from "react";

function TaskCard({ id, title, date, important = false, completed = false, handleTasks }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isImportant, setIsImportant] = useState(important);
  const color = isCompleted && isImportant ? colors.blue.light : ( isImportant ? colors.blue.normal : colors.gray.icon );
  const dateParsed = new Date(date);
  const [day, month, numDay] = dateParsed.toString().split(" ");

  function handleChange() {
    setIsCompleted(!isCompleted);
    updateTask(id, { completed: !isCompleted }).then(upTask => {
      handleTasks(tasks => {
        const index = tasks.findIndex(task => task.id === id);
        tasks[index] = upTask;
        return tasks;
      });
    });
  }

  function handleClick() {
    if(isCompleted) return;
    setIsImportant(!isImportant);
    updateTask(id, { important: !isImportant }).then(upTask => {
      handleTasks(tasks => {
        const index = tasks.findIndex(task => task.id === id);
        tasks[index] = upTask;
        return tasks;
      });
    });
  }

  return (
      <Section>
        <FormGroup check style={{maxWidth: "240px"}}>
          <Input 
            type="checkbox"
            defaultChecked={isCompleted}
            onChange={handleChange}
          />
          <Division>
            <Label 
              check
              style={{fontWeight: "600", color: isCompleted ? colors.gray.normal : colors.black}}
            >
              { title }
            </Label>
            {
              date
              ? <span style={{color: isCompleted ? colors.gray.normal : colors.black}}>{`${day}, ${month} ${numDay}`}</span>
              : null
            }
          </Division>
        </FormGroup>
        <BsExclamationCircleFill
          size="20px"
          style={{cursor: "pointer"}}
          color={color}
          onClick={handleClick}
        />
      </Section>
  );
}

export default TaskCard;
