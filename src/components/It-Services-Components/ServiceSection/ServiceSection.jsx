import React, { useState, useEffect, useRef } from "react";
import Services from "../../../api/service";
import { Link } from "react-router-dom";

// Import service images directly
import serviceImg1 from "../../../images/service/service-img01.jpg";
import serviceImg2 from "../../../images/service/service-img02.jpg";
import serviceImg3 from "../../../images/service/service-img03.jpg";
import serviceImg4 from "../../../images/service/service-img04.jpg";

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBgRef = useRef(null);
  const serviceListRef = useRef(null);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const updateActiveBg = (index) => {
    const serviceListItems =
      serviceListRef.current.querySelectorAll(".service-list-item");
    const activeBg = activeBgRef.current;

    if (serviceListItems[index] && activeBg) {
      const activeItem = serviceListItems[index];
      const itemRect = activeItem.getBoundingClientRect();
      const listRect = serviceListRef.current.getBoundingClientRect();

      activeBg.style.top = `${itemRect.top - listRect.top}px`;
      activeBg.style.height = `${itemRect.height}px`;
    }
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    updateActiveBg(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
    updateActiveBg(0);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    updateActiveBg(index);
  };

  useEffect(() => {
    updateActiveBg(0);
  }, []);

  // Service images array - using more appropriate images from public folder
  const serviceImages = [
    "/agentic-AI.webp",
    "/GenAI-LLM-Integration.webp", 
    "/Data-Engineering.webp",
    "/Data-&-Analytics.webp"
  ];

  console.log("Service Images:", serviceImages);
  console.log("Services:", Services.slice(6, 10));

  return (
    <section className="services z-1 service-height pos-rel">
      <div className="service-images">
        {Services.slice(6, 10).map((service, srv) => (
          <div
            className={`service-image-item ${
              activeIndex === srv ? "active" : ""
            }`}
            key={srv}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url(${serviceImages[srv]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
      <div className="service-content-box ul_li pos-rel">
        <div className="service-content-list">
          <h3 className="title">Core expertise</h3>
          <div
            className="service-list"
            ref={serviceListRef}
            onMouseLeave={handleMouseLeave}
          >
            {Services.slice(6, 10).map((service, srv) => (
              <div
                onClick={() => handleClick(srv)}
                onMouseEnter={() => handleMouseEnter(srv)}
                className={`service-list-item ul_li_between ${
                  activeIndex === srv ? "current" : ""
                }`}
                key={srv}
              >
                <div className="xb-item--icon">
                  <img
                    src={service.sIcon}
                    alt={service.title}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      console.log("Image failed to load:", service.sIcon);
                      e.target.style.display = "none";
                    }}
                    onLoad={() => {
                      console.log("Image loaded successfully:", service.sIcon);
                    }}
                  />
                </div>
                <h3 className="xb-item--title">{service.title}</h3>
                <Link
                  onClick={ClickHandler}
                  to={`/service-single/${service.slug}`}
                  className="xb-item--arrow"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1C12 0.447714 11.5523 -7.61451e-07 11 -3.39982e-07L2 -2.13542e-07C1.44772 -5.50717e-07 1 0.447715 1 0.999999C1 1.55228 1.44772 2 2 2L10 2L10 10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10L12 1ZM1.70711 11.7071L11.7071 1.70711L10.2929 0.292893L0.292893 10.2929L1.70711 11.7071Z"
                      fill="#111112"
                    />
                  </svg>
                </Link>
              </div>
            ))}
            <div className="active-bg" ref={activeBgRef}></div>
          </div>
        </div>
        <div className="service-content-image">
          {Services.slice(6, 10).map((service, srv) => (
            <div
              className={`xb-item--img ${activeIndex === srv ? "active" : ""}`}
              key={srv}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%), url(${serviceImages[srv]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: activeIndex === srv ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 0,
                right: "30px",
                width: "43%",
                height: "calc(100% - 60px)",
                bottom: 0,
                margin: "auto",
                borderRadius: "10px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
