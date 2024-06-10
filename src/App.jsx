import {BrowserRouter, Routes, Route} from "react-router"
import { useState } from "react";
import { Landing, Dashboard, Error, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
