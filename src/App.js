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
import Themes from "./component/Projects/Themes/Themes";
import TodoList from "./component/Projects/TodoList/TodoList";
import GrandParent from "./component/Projects/UseContext/GrandParent";
import LogInPage from "./component/Projects/LogInCoditions/LogInPage";

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
      <Route path="/todos" element={<TodoList />} />
      <Route path="/use-context" element={<GrandParent />} />
      <Route path="/theme-color" element={<Themes />} />
      <Route path="login" element={<LogInPage />} />
    </Routes>
    </>
  );
}

export default App;
