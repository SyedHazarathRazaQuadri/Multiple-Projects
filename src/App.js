import { React, useState } from "react";
import List from "./component/Projects/SearchBar/List"
import "./App.css";
import RealAPI from "./component/Projects/RealAPI.js/RealAPI";

function App() {
  return (
    <>
        {/* <h1>React Search</h1>
        <div className="search">
          <textarea
            id="outlined-basic"
            rows={2}
            cols={45}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <List /> */}
      <RealAPI />
    </>
  );
}

export default App;
