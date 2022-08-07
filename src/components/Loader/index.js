import { BarLoader } from "react-spinners";
import { Container } from "./styles";

function Loader() {
  return (
    <Container>
      <BarLoader color="#385ED7" size={150}/>
    </Container>
  ); 
}

export default Loader;
