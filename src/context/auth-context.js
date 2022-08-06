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
    return login(credentials).then(data => {
      setUser(data);
      navigate("/");
    }).catch(e => setError(e.message));
  }

  function handleSignUp(data) {
    return signup(data).then(response => {
      setUser(response);
      navigate("/");
    }).catch(e => setError(e.message));
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      navigate("/login");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
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
