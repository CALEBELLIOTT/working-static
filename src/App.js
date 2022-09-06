import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from "./components/header/Header";
import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./components/side-bar/Sidebar";


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Outlet />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
