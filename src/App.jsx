import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Countries from "./Pages/Countries";
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/weather/:cityName" element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;
