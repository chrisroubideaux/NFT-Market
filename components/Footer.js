import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import piggy from '../assets/piggy.png';

function Footer() {
  return (
    <div>
      <hr className="hr mt-5 " />
      <footer className="pt-4 py-5">
        <div className="row">
          <div className="col-12 col-md">
            <Image src={piggy} height={24} width={30} alt="" />
            <small className="d-block mb-3 text-muted">&copy; 2022</small>
          </div>
          <div className="col-6 col-md">
            <h4 className="">Features</h4>
            <ul className="list-unstyled">
              <li className="">
                <Link className="nav-link" href="/">
                  Order online
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" href="/">
                  Gift cards
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" href="/">
                  Specials
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" href="/">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h4>Contact</h4>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <i className="social-icons fab fa-facebook-f m-2"></i>
              </li>
              <li className="mb-1">
                <i className="social-icons fab fa-instagram m-2 "></i>
              </li>
              <li className="mb-1">
                <i className="social-icons fab fa-twitter m-2"></i>
              </li>
              <li className="mb-1">
                <i className="social-icons fab fa-pinterest-p m-2"></i>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h4>About</h4>
            <ul className="list-unstyled text-small">
              <li className="">
                <Link className="nav-link" href="/">
                  Team
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" href="/">
                  Locations
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" href="/">
                  Privacy
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" href="/">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
