import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.scss';
import AdminComponent from "./components/admin/admin.component";
// import HomepageComponentV2 from "./components/website/homepage/homepage.component";
import WebsiteIndexComponent from "./components/website/index.component";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<WebsiteIndexComponent activePage="home"/>}></Route>
      <Route path="/privacy-policy" element={<WebsiteIndexComponent activePage="privacyPolicy"/>}></Route>
      <Route path="/terms-conditions" element={<WebsiteIndexComponent activePage="termsandconditions"/>}></Route>
      <Route path="/admin" element={<AdminComponent />}></Route>
    </Routes>
  </>;
}

export default App;
