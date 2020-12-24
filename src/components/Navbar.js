import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="MASC" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Үндсэн цонх</Link>
            </li>
            <li>
              <Link to="/rooms">Мэдээ</Link>
            </li>
            <li>
              <Link to="/location">Байршил</Link>
            </li>
            <li>
              <Link to="/about">Бидний тухай</Link>
            </li>
            <li>
              <Link to="facebook"> Нэвтрэх цонх </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
