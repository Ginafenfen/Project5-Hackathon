import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
