import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
  {
    id: 1,
    title: "Company",
    link: "#",
    submenu: [
      {
        id: 10,
        title: "About Us",
        link: "/about",
      },

      {
        id: 12,
        title: "Our Global Presence",
        link: "/company/our-journey",
      },
      {
        id: 13,
        title: "Leadership Team",
        link: "/Company/leadership-team",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    link: "/about",
    submenu: [
      {
        id: 31,
        title: " AI & GenAI Practice",
        link: "/service/ai-and-gen-ai",
      },
      {
        id: 3222,
        title: "Cloud & Application Services",
        link: "/service/cloud-and-application-services",
      },
      {
        id: 322,
        title: "SAP Services",
        link: "/service/sap-services",
      },
      {
        id: 345,
        title: "Managed IT Services",
        link: "/service/managed-it-services",
      },
      {
        id: 3454,
        title: "Data & Analytics",
        link: "/service/data-and-analytics",
      },
      {
        id: 3455,
        title: "Engineering & Manufacturing IT",
        link: "/service/engineering-and-manufacturing-it",
      },
      {
        id: 3456,
        title: "Healthcare & Life Sciences IT",
        link: "/service/healthcare-and-life-sciences-it",
      },
      {
        id: 3457,
        title: "Talent Solutions",
        link: "/service/talent-solutions",
      },
    ],
  },
  {
    id: 5,
    title: "Industries",
    link: "#",
    submenu: [
      {
        id: 51,
        title: "Healthcare & Life Sciences",
        link: "/industries/helthcare-and-life-sciences",
      },
      {
        id: 52,
        title: "Manufacturing & Automotive",
        link: "/industries/menufacturing-and-automotive",
      },
      {
        id: 53,
        title: "Aerospace & Defense",
        link: "/industries/aerospace-and-defense",
      },
      {
        id: 54,
        title: "Banking & Financial Services",
        link: "/industries/banking-and-financial-services",
      },
    ],
  },
  {
    id: 7,
    title: "Insights",
    link: "#",
    submenu: [
      {
        id: 71,
        title: "Blog",
        link: "/insights/blog",
      },
      {
        id: 72,
        title: "Whitepapers & Case Studies",
        link: "/insights/whitepapers-and-case-studies",
      },
      {
        id: 73,
        title: "News & Announcements",
        link: "/insights/news-and-announcements",
      },
    ],
  },
  {
    id: 6,
    title: "Careers",
    link: "#",
    submenu: [
      {
        id: 61,
        title: "Current Openings",
        link: "/careers/current-openings",
      },
      {
        id: 62,
        title: "Life at Company",
        link: "/careers/life-at-company",
      },
      {
        id: 63,
        title: "How we hire",
        link: "/careers/hiring-process",
      },
    ],
  },
  {
    id: 88,
    title: "Contact",
    link: "#",
    submenu: [
      {
        id: 911,
        title: "Contact",
        link: "/contact",
      },
      {
        id: 91,
        title: "Request a Callback",
        link: "#",
      },
      {
        id: 92,
        title: "General Inquiries",
        link: "#",
      },
      {
        id: 93,
        title: "Office Locations",
        link: "#",
      },
    ],
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <ul className="xb-menu-primary clearfix">
      {menus.map((item, mn) => {
        return (
          <ListItem className={item.id === openId ? "active" : null} key={mn}>
            {item.submenu ? (
              <Fragment>
                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                  {item.title}
                  <i
                    className={
                      item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                  ></i>
                </p>
                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                  <List className="menu-item menu-item-has-children active">
                    <Fragment>
                      {item.submenu.map((submenu, i) => {
                        return (
                          <ListItem key={i}>
                            <Link
                              onClick={ClickHandler}
                              className="active"
                              to={submenu.link}
                            >
                              {submenu.title}
                            </Link>
                          </ListItem>
                        );
                      })}
                    </Fragment>
                  </List>
                </Collapse>
              </Fragment>
            ) : (
              <Link className="active" to={item.link}>
                {item.title}
              </Link>
            )}
          </ListItem>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
