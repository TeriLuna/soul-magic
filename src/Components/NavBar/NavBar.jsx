import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import CardWidget from "../CardWidget/CardWidget";
import logo from "../../assets/images/logo/logo-symbol.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    let elements = document.querySelectorAll(".has-droupdown > a");
    for (let i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <header className={`header-area formobile-menu header--static color-white`}>
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Soul Magic logo" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li className="has-droupdown">
                  <Link to="/allProducts">Products</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/allProducts">All products</Link>
                    </li>
                    <li>
                      <Link to="/category/books">Books</Link>
                    </li>
                    <li>
                      <Link to="/category/decoration">Decoration</Link>
                    </li>
                    <li>
                      <Link to="/category/environment">Environment</Link>
                    </li>
                    <li>
                      <Link to="/category/sounds">Sounds</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link
                to="allProducts"
                className="btn-default btn-outline btn-opacity"
              >
                <span className="text">Buy </span>
                <CardWidget />
              </Link>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default NavBar;
