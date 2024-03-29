import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar></Navbar>
          <Alert message="This is amazing"></Alert>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />

              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
