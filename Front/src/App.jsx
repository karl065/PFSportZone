import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavBar } from "./Components";
import {
  Landing,
  Home,
  Detail,
  Review,
  Faq,
  Error,
  About,
  AdminUsers,
  AdminProducts,
  AdminEmployes,
  UserRegister,
  ProductCreation,
  AdminUsers,
  AdminProducts,
  AdminEmployes,
} from './Views';
import {useState} from 'react';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminEmployes" element={<AdminEmployes />} />
        {/* <Route path="/favorites"/> */}
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/product/create" element={<ProductCreation />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error setErrorPage={setErrorPage} />} />
      </Routes>
    </div>
  );
}

export default App;
