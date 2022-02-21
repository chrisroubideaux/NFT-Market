import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import piggy from '../assets/piggy.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/">
          <Image src={piggy} height={24} width={30} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="social-icon fas fa-align-right"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link pt-5" href="/collections">
                collections
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/create">
                create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Login
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="nav-item ml-5">
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
