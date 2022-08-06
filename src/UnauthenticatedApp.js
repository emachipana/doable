import { Navigate, Route, Routes } from "react-router-dom";
import SessionPage from "./pages/session-page";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="login" />}/>
      <Route path="login" element={<SessionPage />} />
      <Route path="signup" element={<SessionPage />} />
    </Routes>
  );
}

export default UnauthenticatedApp;
