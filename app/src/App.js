import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.scss';
import AdminComponent from "./components/admin/admin.component";
// import HomepageComponentV2 from "./components/website/homepage/homepage.component";
import WebsiteIndexComponent from "./components/website/index.component";
import LoginComponent from "./components/admin/Partials/Login/login.component";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<WebsiteIndexComponent activePage="home"/>}></Route>
      <Route path="/privacy-policy" element={<WebsiteIndexComponent activePage="privacyPolicy"/>}></Route>
      <Route path="/terms-conditions" element={<WebsiteIndexComponent activePage="termsandconditions"/>}></Route>
      <Route path="/dashboard" element={<AdminComponent path="dashboard"/>}></Route>
      <Route path="/manage-users" element={<AdminComponent path="manageUsers"/>}></Route>
      <Route path="/user-bookings" element={<AdminComponent path="userBookings"/>}></Route>
      <Route path="/manage-works" element={<AdminComponent path="manageWorks"/>}></Route>
      <Route path="/work-bookings" element={<AdminComponent path="workBookings"/>}></Route>
      <Route path="/works-category" element={<AdminComponent path="workCategoeris"/>}></Route>
      <Route path="/signup" element={<LoginComponent />}></Route>
      <Route path="/create-update-form" element={<AdminComponent path="createUpdateForm"/>}></Route>
    </Routes>
  </>;
}

export default App;
