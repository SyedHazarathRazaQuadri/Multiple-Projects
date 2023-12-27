import React from "react";
import "./App.css";
import RestAPI from "./component/Projects/RestAPI/RestAPI";
import BgColors from "./component/Projects/BgColors/BgColor";
import UniversitiesApi from "./component/Projects/UniversitiesApi/UniversitiesApi";
import TableSearch from "./component/Projects/TableSearch/TableSearch";
import { Route, Routes } from "react-router-dom";
import Counter from "./component/Projects/Counter/Counter";
import NavBar from "./component/NavBar/NavBar";
import PropsDrilling from './component/Projects/PropsDrilling/GrandParent'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route index element={<RestAPI />}/>
      <Route path="/home" element={<RestAPI />}/>
      <Route path="/multi-bg-colors" element={<BgColors />}/>
      <Route path="/universities" element={<UniversitiesApi />}/>
      <Route path="/table" element={<TableSearch />}/>
      <Route path="/counter" element={<Counter />} />
      <Route path="/use-context" element={<PropsDrilling />} />
    </Routes>
    </>
  );
}

export default App;
