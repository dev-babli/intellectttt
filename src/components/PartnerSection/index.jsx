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
]

var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <section className="brand pt-30 pb-140">
            <div className="container">
                <div className="o-hidden">
                    <div className="brand-sub_title">
                        <span>Trusted by <b>500+</b> teams to empower <b>2,00,000+</b> people</span>
                    </div>
                    <div className="brand-wrap brand-marquee">
                        <Slider {...settings}>
                            {partners.map((partner, pitem) => (
                                <div 
                                    className="brand-logo" 
                                    key={pitem}
                                    style={{
                                        height: "80px",
                                        width: "160px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "10px",
                                        boxSizing: "border-box",
                                        margin: "0 auto"
                                    }}
                                >
                                    <img 
                                        src={partner.pImg} 
                                        alt={partner.name} 
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "60px",
                                            width: "auto",
                                            height: "auto",
                                            objectFit: "contain",
                                            filter: "none",
                                            opacity: "1",
                                            transition: "all 0.3s ease"
                                        }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;