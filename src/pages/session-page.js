import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import SessionForm from "../components/SessionForm";
import { Container } from "./ui";

function SessionPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
      <Container>
        <SessionForm
          location={location.pathname}
        />
        <Button 
          style={{margin: "1rem 0"}}
          color="link"
          tag="a"
          onClick={() => navigate(location.pathname === "/login" ? "/signup" : "/login")}
        >
          {location.pathname === "/login" ? "Signup" : "Login"}
        </Button>
      </Container>
  );
}

export default SessionPage;
