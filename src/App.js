import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UserSkills from "./Pages/UserSkills";

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};

const ProtectedRoute = ({ element: Element, ...rest }) => {
  return isAuthenticated() ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={Home} />} />
        <Route path="/user-skills" element={<ProtectedRoute element={UserSkills} />} />
      </Routes>
    </Router>
  );
}

export default App;
