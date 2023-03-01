import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <a className="navbar-brand ps-5 text-light" href="#">
            Start Bootstrap
          </a>
          <ul className="navbar-nav ms-auto m-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-5 text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
