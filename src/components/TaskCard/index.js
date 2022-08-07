import { FormGroup, Input, Label } from "reactstrap";
import { Section, Division } from "./styles";
import { BsExclamationCircleFill } from "react-icons/bs";
import { colors } from "../../styles/colors";

function TaskCard({ title = "Help my mom", date, isImportant = false, isCompleted = false }) {
  const color = isCompleted && isImportant ? colors.blue.light : ( isImportant ? colors.blue.normal : colors.gray.icon );

  return (
      <Section>
        <FormGroup check style={{maxWidth: "240px"}}>
          <Input type="checkbox"/>
          <Division>
            <Label 
              check
              style={{fontWeight: "600", color: isCompleted ? colors.gray.normal : colors.black}}
            >
              { title }
            </Label>
            {
              date
              ? <span>Saturday</span>
              : null
            }
          </Division>
        </FormGroup>
        <BsExclamationCircleFill
          size="20px"
          style={{cursor: "pointer"}}
          color={color}
        />
      </Section>
  );
}

export default TaskCard;
