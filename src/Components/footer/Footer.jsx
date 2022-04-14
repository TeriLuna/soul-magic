import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-symbol.png";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
];

export default function Footer() {
  return (
    <>
      <div className="footer-style-2 ptb--30 bg_color--6">
        <div className="wrapper plr--50 plr_sm--20">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner">
                <div className="logo text-center text-sm-left mb_sm--20">
                    <Link  to={`/`}>
                      <img src={logo} alt="Logo of Soul Magic"/>
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner text-center">
                <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                  {SocialShare.map((val, i) => (
                    <li key={i}>
                      <a href={`${val.link}`}>{val.Social}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                <div className="text">
                  <a href="http://fckingbrandme.com/" target="_blank" rel="noreferrer">
                    <p className="text-white">
                      Copyright © 2022 Fcking Brand Me. All Rights Reserved.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
