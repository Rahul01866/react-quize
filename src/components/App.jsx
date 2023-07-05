import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Result from "./pages/result/Result";
import Quiz from "./pages/quiz/Quiz";
import Login from "./pages/login/Login";
import Home from "./pages/signup/Home";
import Signup from "./pages/signup/Signup";
import "../styles/signup/App.css";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
