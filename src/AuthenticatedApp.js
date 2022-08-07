import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="home"/>} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
}

export default AuthenticatedApp;
