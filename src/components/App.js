// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Sandbox from './Sandbox';
import './App.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/sandbox" element={<Sandbox />} />
    </Routes>
  );
}
