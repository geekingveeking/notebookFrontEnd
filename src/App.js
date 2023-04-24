
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./Components/NoteState";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>

      <Routes>
        <Route  path="/" element={<NavBar />}>
        <Route index element={<Home />}/>
        <Route path="aboutUs" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
 </Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
