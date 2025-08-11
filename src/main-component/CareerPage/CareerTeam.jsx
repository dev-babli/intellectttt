import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import cIcon1 from "../../images/icon/cp-icon.svg";
import cIcon2 from "../../images/icon/loc-icon.svg";
import cIcon3 from "../../images/icon/clock-icon.svg";

const jobListings = [
  {
    id: 1,
    title: "Frontend React Developer",
    location: "Remote, India",
    type: "Full time",
    slug: "frontend-react-developer",
    categories: ["development", "design"],
  },
  {
    id: 2,
    title: "Cloud DevOps Engineer",
    location: "Bangalore (Hybrid)",
    type: "Full time",
    slug: "cloud-devops-engineer",
    categories: ["cloud", "management"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote, USA",
    type: "Full time",
    slug: "ui-ux-designer",
    categories: ["design", "marketing"],
  },
  {
    id: 4,
    title: "Product Manager",
    location: "New York, USA",
    type: "Full time",
    slug: "product-manager",
    categories: ["management", "customer-service"],
  },
  {
    id: 5,
    title: "Technical Support Specialist",
    location: "Remote, Philippines",
    type: "Full time",
    slug: "technical-support-specialist",
    categories: ["customer-service"],
  },
  {
    id: 6,
    title: "Data Scientist – AI & ML",
    location: "Warsaw, Poland",
    type: "Full time",
    slug: "data-scientist-ai-ml",
    categories: ["development", "cloud"],
  },
];

const CareerTeam = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  const filters = [
    { key: "*", label: "View All" },
    { key: "development", label: "Development" },
    { key: "design", label: "Design" },
    { key: "marketing", label: "Marketing" },
    { key: "customer-service", label: "Customer Services" },
    { key: "management", label: "Management" },
    { key: "cloud", label: "Cloud & Infrastructure" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="team pt-130 pb-130">
      <div className="container">
        <div className="sec-title--two text-center mb-50">
          <Fade
            direction="down"
            triggerOnce={"false"}
            duration={1000}
            delay={9}
          >
            <div>
              <div
                className="sub-title wow fadeInDown"
                data-wow-duration="600ms"
              >
                <img src={cIcon1} alt="icon" />
                Open Positions
              </div>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={"false"} duration={1200} delay={9}>
            <div>
              <h2
                className="title wow fadeInDown"
                data-wow-delay="150ms"
                data-wow-duration="600ms"
              >
                Join our team
              </h2>
            </div>
          </Fade>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="team-menu mb-50">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={activeFilter === filter.key ? "active" : ""}
                  onClick={() => handleFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="cp-team-wrap grid">
              <AnimatePresence>
                {jobListings
                  .filter(
                    (job) =>
                      activeFilter === "*" ||
                      job.categories.includes(activeFilter)
                  )
                  .map((job) => (
                    <motion.div
                      key={job.id}
                      className={`cp-team-item grid-item ${job.categories.join(
                        " "
                      )}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="xb-item--inner ul_li_between">
                        <div className="xb-item--content">
                          <h3 className="xb-item--title">
                            <Link onClick={scrollToTop} to="/career-details">
                              {job.title}
                            </Link>
                          </h3>
                          <div className="xb-item--holder ul_li">
                            <span className="xb-item--meta">
                              <img src={cIcon2} alt="location" />
                              {job.location}
                            </span>
                            <span className="xb-item--meta">
                              <img src={cIcon3} alt="time" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="cp-team-btn">
                          <Link
                            onClick={scrollToTop}
                            to="/career-details"
                            className="cp-btn"
                          >
                            View job <i className="fal fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTeam;
