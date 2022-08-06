import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import SessionForm from "../components/SessionForm";
import { useAuth } from "../context/auth-context";
import { Container } from "./ui";

function SessionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setError } = useAuth();

  return (
      <Container>
        <SessionForm
          location={location.pathname}
        />
        <Button 
          style={{margin: "1rem 0"}}
          color="link"
          tag="a"
          onClick={() => {
            navigate(location.pathname === "/login" ? "/signup" : "/login");
            setError(null);
          }}
        >
          {location.pathname === "/login" ? "Signup" : "Login"}
        </Button>
      </Container>
  );
}

export default SessionPage;
