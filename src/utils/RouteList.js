import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewUsers from "../components/actions/ViewUsers";
import Home from "../components/Home";
import AddUser from "../components/actions/AddUser";
const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="view-users" element={<ViewUsers />} />
      <Route path="add-user" element={<AddUser />} />
    </Routes>
  );
};

export default RoutesList;
