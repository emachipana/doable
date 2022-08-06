import AuthenticatedApp from "./AuthenticatedApp";
import Header from "./components/Header";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Header
        isAuth={!!user}
      />
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </>
  )
}

export default App;
