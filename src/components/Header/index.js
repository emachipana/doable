import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { Container, Icon } from "./styles";

function Header({ isAuth }) {
  return (
    <Container>
      <Logo style={{filter: "invert(20%) sepia(54%) saturate(3121%) hue-rotate(140deg) brightness(31%) contrast(51%)"}}/>
      { isAuth && <Icon /> }
    </Container>
  );
}

export default Header;
