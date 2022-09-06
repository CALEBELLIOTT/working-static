import React from "react";
import "./Header.css"
import { Link, Outlet } from "react-router-dom";


export class Header extends React.Component {


  render() {
    return (
      <div className="bg-dark text-light">
        <div className="d-flex p-2 text-light">
          <p className="m-0">Caleb Elliott</p>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
          </nav>
        </div>
        <Outlet></Outlet>
      </div>
    )
  }
}