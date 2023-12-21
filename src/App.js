import React from "react";
import "./App.css";
import RealAPI from "./component/Projects/RealAPI.js/RealAPI";
import AxiosAPI from "./component/Projects/AxiosApi/AxoisApi";
import UniversitiesApi from "./component/Projects/UniversitiesApi/UniversitiesApi";
import TableSearch from "./component/Projects/TableSearch/TableSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./component/Projects/TodoList/TodoList";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<RealAPI />}/>
      <Route path="/home" element={<RealAPI />}/>
      <Route path="/rest-api" element={<AxiosAPI />}/>
      <Route path="/universities" element={<UniversitiesApi />}/>
      <Route path="/table" element={<TableSearch />}/>
      <Route path="/todo" element={<TodoList />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
