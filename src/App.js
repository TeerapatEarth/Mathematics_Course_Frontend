import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import BlankPage from "./view/BlankPage";
import Drawer from "./component/Drawer"
import CreateCourse from "./view/CreateCourse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Drawer page={<Home/>} />}></Route>
      <Route path="/login" element={<Drawer page={<Login/>} />}></Route>
      <Route path="/createcourse" element={<Drawer page={<CreateCourse/>}/>}></Route>
      <Route path="*" element={<BlankPage />}></Route>
    </Routes>
  );
}

export default App;
