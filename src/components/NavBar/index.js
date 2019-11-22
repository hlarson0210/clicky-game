import React, { Component } from "react";
import "./style.css";


class Navbar extends Component {
    render() {
      return (
        <div className="container-fluid fixed-top p-0 m-0">
          <div className="row m-0 p-0">
            <ul className="nav col-sm-12">
              <li className="nav-item col col-sm-6 mx-auto text-center">
                <span className="nav-link text-white">click any image to start</span>
              </li>
              <li className="nav-item col col-sm-6 mx-auto text-center">
                <span className="nav-link text-white">score: {this.props.score} | top score: {this.props.topScore} </span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

export default Navbar;
