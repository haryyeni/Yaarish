import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.scss';
import HomepageComponent from "./components/homepage/homepage.component";
import AdminComponent from "./components/admin/admin.component";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<HomepageComponent />}></Route>
      <Route path="/admin" element={<AdminComponent />}></Route>
    </Routes>
  </>;
}

export default App;
