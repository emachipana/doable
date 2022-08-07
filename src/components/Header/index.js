import { useAuth } from "../../context/auth-context";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { Container, Icon } from "./styles";

function Header({ isAuth }) {
  const { logout, setError } = useAuth();

  return (
    <Container>
      <Logo style={{filter: "invert(21%) sepia(45%) saturate(5051%) hue-rotate(210deg) brightness(100%) contrast(92%)"}}/>
      { isAuth && <Icon onClick={() => { 
        logout();
        setError(null);
      }} /> }
    </Container>
  );
}

export default Header;
