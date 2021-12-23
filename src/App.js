import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import BlankPage from "./view/BlankPage";
import Drawer from "./component/Drawer"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Drawer page={<Home/>} />}></Route>
      <Route path="/login" element={<Drawer page={<Login/>} />}></Route>
      <Route path="*" element={<BlankPage />}></Route>
    </Routes>
  );
}

export default App;
