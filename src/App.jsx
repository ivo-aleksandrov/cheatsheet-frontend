import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Wrapper from "./components/wrapper/Wrapper";
import Commands from "./pages/commands/Commands";
import AddCategory from "./pages/category/AddCategory";
import AddCommand from "./pages/commands/AddCommand";
import EditCommand from "./pages/commands/EditCommand";
import EditCategory from "./pages/category/EditCategory";

function App() {
  return (
    <BrowserRouter>
      <Wrapper />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/commands/:id" element={<Commands />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/commands/:id/addCommand/" element={<AddCommand />} />
          <Route
            path="/commands/:id/editCommand/:commandID"
            element={<EditCommand />}
          />
          <Route path="/editCategory/:id" element={<EditCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
