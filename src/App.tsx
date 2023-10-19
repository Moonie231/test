import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddWork from "./pages/AddWork";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Home />}></Route>
        <Route path={"/add"} element={<AddWork />}></Route>
      </Routes>
    </>
  );
}

export default App;
