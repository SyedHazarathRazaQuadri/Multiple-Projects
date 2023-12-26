import React from "react";
import "./App.css";
import RealAPI from "./component/Projects/RealAPI.js/RealAPI";
import BgColors from "./component/Projects/BgColors/BgColor";
import UniversitiesApi from "./component/Projects/UniversitiesApi/UniversitiesApi";
import TableSearch from "./component/Projects/TableSearch/TableSearch";
import { Route, Routes } from "react-router-dom";
import TodoList from "./component/Projects/TodoList/TodoList";
import Parent from "./component/Projects/TwoComponents/Parent";
import Counter from "./component/Projects/Counter/Counter";
import NavBar from "./component/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route index element={<RealAPI />}/>
      <Route path="/home" element={<RealAPI />}/>
      <Route path="/multi-bg-colors" element={<BgColors />}/>
      <Route path="/universities" element={<UniversitiesApi />}/>
      <Route path="/table" element={<TableSearch />}/>
      <Route path="/counter" element={<Counter />} />
    </Routes>
    </>
  );
}

export default App;
