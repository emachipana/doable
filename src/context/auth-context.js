const { useState, useEffect, useContext, createContext } = require("react");
const { useNavigate } = require("react-router-dom");
const { getUser, login, signup, logout } = require("../services/session-service");

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    getUser().then(data => {
      setUser(data)
      setTimeout(() => { setIsLoading(false) }, 1500)
    }).catch(() => setIsLoading(false));
  }, []);

  function handleLogin(credentials) {
    setIsLoading(true);
    return login(credentials).then(data => {
      setUser(data);
      navigate("/");
      setIsLoading(false);
    }).catch(e => {
      setError(e.message);
      setIsLoading(false);
    });
  }

  function handleSignUp(data) {
    setIsLoading(true);
    return signup(data).then(response => {
      setUser(response);
      navigate("/");
      setIsLoading(false);
    }).catch(e => {
      setError(e.message);
      setIsLoading(false);
    });
  }

  function handleLogout() {
    setIsLoading(true);
    return logout().finally(() => {
      setUser(null);
      navigate("/login");
      setIsLoading(false);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setError,
        isLoading,
        login: handleLogin,
        signup: handleSignUp,
        logout: handleLogout
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth }
