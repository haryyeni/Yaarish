import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.scss';
import AdminComponent from "./components/admin/admin.component";
import HomepageComponentV2 from "./components/website/homepage/homepage.component";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<HomepageComponentV2 />}></Route>
      <Route path="/admin" element={<AdminComponent />}></Route>
    </Routes>
  </>;
}

export default App;
