
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./Components/NoteState";

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>

      <Routes>
        <Route  path="/" element={<NavBar />}>
        <Route index element={<Home />}/>
        <Route path="AboutUs" element={<About />} />
 </Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
