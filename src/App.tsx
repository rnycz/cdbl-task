import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTable from "./components/DataTable";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DataTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
