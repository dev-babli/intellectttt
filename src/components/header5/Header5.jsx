import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/shape/trangle-shape05.png";

import icon13 from "../../images/icon/sms-white-icon01.svg";
import logo from "../../images/logo/Intellectt-Logo.webp";

import MobileMenu from "../MobileMenu/MobileMenu";
import AnimatedDrawerMenu from "../Drower/AnimatedDrawerMenu";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header5 = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  const iconStyle = {
    backgroundColor: "#fff",
    color: "rgb(30, 64, 175)",
    borderRadius: "50%",
    border: "1px solid rgb(30, 64, 175)",
    width: 30,
    height: 30,
    "&:hover": {
      backgroundColor: "rgba(216, 222, 241, 1)",
      color: "#fffff!important",
    },
  };
  return (
    <div
      id="xb-header-area"
      className="header-area header-style-two header-style-five header-transparent"
    >
      <div className="header-top">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{
            px: {
              xs: 2,
              sm: 2,
              md: 10,
              lg: 10,
              xl: 10,
            },
            py: {
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
            },
          }}
        >
          <Typography variant="body1" color="white">
           Shaping the Future of Intelligence - Together
           
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              margin: {
                xs: "auto",
                md: 0,
              },
            }}
          >
            <IconButton
              component="a"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <LinkedInIcon color="primary" fontSize="small"/>
            </IconButton>
            <IconButton
              component="a"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <TwitterIcon color="primary" fontSize="small"/>
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <FacebookIcon color="primary" fontSize="small"/>
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <YouTubeIcon color="primary" fontSize="small"/>
            </IconButton>
          </Stack>
        </Box>
        {/* <span>
          <Link onClick={ClickHandler} to="/">
          
          </Link>
        </span> */}
        {/* <div className="header-shape">
          <div className="shape shape--one">
            <img src={icon1} alt="" />
          </div>
          <div className="shape shape--two">
            <img src={icon1} alt="" />
          </div>
        </div> */}
      </div>
      <div
        className={`xb-header stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="header__wrap ul_li_between">
            <div className="header-logo">
              <Link onClick={ClickHandler} to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  {/* <li>
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li> */}

                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="/">
                      <span>Who We Are</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/about">
                          <span>About Us</span>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={ClickHandler} to="/company/our-journey">
                          <span>Our Global Presence</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/company/leadership-team"
                        >
                          <span>Leadership Team</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <Link onClick={ClickHandler}>
                      <span onClick={() => setIsDrawerOpen(true)}>
                        Services
                      </span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <Link onClick={ClickHandler} to="/service">
                      <span>Industries</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper">
                          <div className="container">
                            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
                              <div className="row justify-content-lg-between">
                                <div className="col-xl-10">
                                  <div className="megamenu_widget_inner">
                                    <div className="row">
                                      <div className="col-xl-6">
                                        <div className="megamenu_widget">
                                          <ul className="icon_list unordered_list_block">
                                            <li>
                                              <Link
                                                onClick={ClickHandler}
                                                to="/industries/helthcare-and-life-sciences"
                                              >
                                                <span className="icon_list_text">
                                                  Healthcare & Life Sciences
                                                </span>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                onClick={ClickHandler}
                                                to="/industries/menufacturing-and-automotive"
                                              >
                                                <span className="icon_list_text">
                                                  Manufacturing & Automotive
                                                </span>
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-xl-6">
                                        <div className="megamenu_widget">
                                          <ul className="icon_list unordered_list_block">
                                            <li>
                                              <Link
                                                onClick={ClickHandler}
                                                to="/industries/aerospace-and-defense"
                                              >
                                                <span className="icon_list_text">
                                                  Aerospace & Defense{" "}
                                                </span>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                onClick={ClickHandler}
                                                to="/industries/banking-and-financial-services"
                                              >
                                                <span className="icon_list_text">
                                                  Banking & Financial Services
                                                </span>
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="social_area">
                                    <div className="social_inner ul_li">
                                      <h5>Follow Us:</h5>
                                      <ul className="social_icons_block unordered_list">
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <i className="fab fa-facebook-f"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <i className="fab fa-linkedin-in"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <svg
                                              width="18"
                                              height="18"
                                              viewBox="0 0 18 18"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M10.6774 7.62177L17.2342 0H15.6805L9.98719 6.61788L5.43998 0H0.195312L7.07159 10.0074L0.195312 18H1.74916L7.76141 11.0113L12.5636 18H17.8083L10.677 7.62177H10.6774ZM8.54921 10.0956L7.8525 9.09906L2.30903 1.16971H4.69564L9.16929 7.56895L9.866 8.56546L15.6812 16.8835H13.2946L8.54921 10.096V10.0956Z"
                                                fill="#0C111D"
                                              />
                                            </svg>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <i className="fab fa-dribbble"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <p className="career_link m-0">
                                      Looking for new career?{" "}
                                      <Link onClick={ClickHandler} to="/career">
                                        We’re Hiring
                                      </Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="#">
                      <span>Insights</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/insights/blog">
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/insights/whitepapers-and-case-studies"
                        >
                          <span>Whitepapers & Case Studies</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/insights/news-and-announcements"
                        >
                          <span>News & Announcements</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="#">
                      <span>Careers</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/carrers/current-openings"
                        >
                          <span>Current Openings</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/carrers/life-at-company"
                        >
                          <span>Life at Company</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/carrers/join-our-tilent-network"
                        >
                          <span>Join Our Talent Network</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="#">
                      <span>Contact</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/contact">
                          <span>Contact Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="#">
                          <span>Request a Callback</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="#">
                          <span>General Inquiries</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="#">
                          <span>Office Locations</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="xb-header-wrap">
                <div
                  className={`xb-header-menu ${mobailActive ? "active" : ""}`}
                >
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div
                      className="xb-menu-close xb-hide-xl xb-close"
                      onClick={() => setMobailState(!mobailActive)}
                    ></div>
                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link onClick={ClickHandler} to="/" rel="home">
                        <img src={logo} alt="" />
                      </Link>
                    </div>

                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>
            <div className="header-bar-mobile side-menu d-xl-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobailState(!mobailActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="header-contact d-none d-md-block">
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="thm-btn thm-btn--header"
              >
                Let’s talk
                <span>
                  <img src={icon13} alt="" />
                </span>
              </Link>
            </div>
            <AnimatedDrawerMenu
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header5;
