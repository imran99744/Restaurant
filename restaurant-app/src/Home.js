import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    document.title = "Home";
    return (
      <div className="header">
        <h1>Welcome to our Special Restaurant</h1>
        <Link to="/menu">
          <button className="btn btn-success">Dlicious Dishes</button>
        </Link>
      </div>
    );
  }
}

export default Home;
