import AuthenticatedApp from "./AuthenticatedApp";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user, isLoading } = useAuth();

  return (
    <>
      {
        isLoading
        ?
        <Loader />
        :
        <>
          <Header
            isAuth={!!user}
          />
          { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
        </>
      }
    </>
  )
}

export default App;
