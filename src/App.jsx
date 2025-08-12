import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Trupage from "./pages/Trupage.jsx";
import Build from "./pages/Build.jsx";
import Projects from "./pages/Projects.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Example routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trupage" element={<Trupage />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="build" element={<Build />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
