import { Navigate, Route, Routes } from "react-router-dom";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="home"/>} />
      <Route path="home" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default AuthenticatedApp;
