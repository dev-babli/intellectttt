import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    pImg: "/partners/aws-logo.png",
    name: "AWS"
  },
  {
    pImg: "/partners/google-cloud-logo.png",
    name: "Google Cloud"
  },
  {
    pImg: "/partners/red-hat-logo.png",
    name: "Red Hat"
  },
  {
    pImg: "/partners/ibm.png",
    name: "IBM"
  },
  {
    pImg: "/partners/salesforce-logo.png",
    name: "Salesforce"
  },
  {
    pImg: "/partners/sap.png",
    name: "SAP"
  },
  {
    pImg: "/partners/uipath.png",
    name: "UiPath"
  },
  {
    pImg: "/partners/citrix-logo.svg",
    name: "Citrix"
  },
  {
    pImg: "/partners/automation-1.png",
    name: "Automation"
  }
];

var settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PartnerSection = (props) => {
  return (
    <section className="brand pt-110 pb-60">
      <div className="container">
        <div className="o-hidden">
          <div className="brand-sub_title">
            <span>
              Trusted Partners
            </span>
          </div>
          <div className="brand-wrap brand-marquee">
            <Slider {...settings}>
              {partners.map((partner, pitem) => (
                <div 
                  className="brand-logo" 
                  key={pitem}
                  style={{
                    height: "100px",
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    boxSizing: "border-box",
                    margin: "0 15px"
                  }}
                >
                  <img 
                    src={partner.pImg} 
                    alt={partner.name} 
                    style={{
                      maxWidth: "120px",
                      maxHeight: "60px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain"
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .brand {
            display: none !important;
          }
        }
        
        @media (max-width: 1400px) {
          .brand-logo {
            width: 180px !important;
            height: 90px !important;
          }
          .brand-logo img {
            max-width: 110px !important;
            max-height: 55px !important;
          }
        }
        
        @media (max-width: 1200px) {
          .brand-logo {
            width: 160px !important;
            height: 80px !important;
            padding: 18px !important;
            margin: 0 12px !important;
          }
          .brand-logo img {
            max-width: 100px !important;
            max-height: 50px !important;
          }
        }
        
        @media (max-width: 991px) {
          .brand-logo {
            width: 140px !important;
            height: 70px !important;
            padding: 15px !important;
            margin: 0 10px !important;
          }
          .brand-logo img {
            max-width: 90px !important;
            max-height: 45px !important;
          }
        }
        
        @media (max-width: 768px) {
          .brand-logo {
            width: 120px !important;
            height: 60px !important;
            padding: 12px !important;
            margin: 0 8px !important;
          }
          .brand-logo img {
            max-width: 80px !important;
            max-height: 40px !important;
          }
        }
        
        @media (max-width: 576px) {
          .brand-logo {
            width: 100px !important;
            height: 50px !important;
            padding: 10px !important;
            margin: 0 6px !important;
          }
          .brand-logo img {
            max-width: 70px !important;
            max-height: 35px !important;
          }
        }
        
        @media (max-width: 480px) {
          .brand-logo {
            width: 80px !important;
            height: 40px !important;
            padding: 8px !important;
            margin: 0 5px !important;
          }
          .brand-logo img {
            max-width: 60px !important;
            max-height: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnerSection;
