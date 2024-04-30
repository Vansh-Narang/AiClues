import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UserSkills from "./Pages/UserSkills";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-routes" element={<UserSkills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
