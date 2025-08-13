import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/icon/Abbott.webp'
import pimg2 from '../../images/icon/Bayer.webp'
import pimg3 from '../../images/icon/Cordis.webp'
import pimg4 from '../../images/icon/Embecta.webp'
import pimg5 from '../../images/icon/Exel.webp'
import pimg6 from '../../images/icon/Integra.webp'
import pimg7 from '../../images/icon/Livanova.webp'
import pimg8 from '../../images/icon/Medline.webp'
import pimg9 from '../../images/icon/Philips.webp'
import pimg10 from '../../images/icon/ThermoFisher.webp'
import pimg11 from '../../images/icon/Terumo.webp'
import pimg12 from '../../images/icon/Xylem.webp'
import pimg13 from '../../images/icon/Alkermes.webp'
import pimg14 from '../../images/icon/PSB.webp'
import pimg15 from '../../images/icon/MTRN.webp'
import pimg16 from '../../images/icon/Aya.webp'
import pimg17 from '../../images/icon/Rentschler.webp'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
    {
        pImg: pimg9,
    },
    {
        pImg: pimg10,
    },
    {
        pImg: pimg11,
    },
    {
        pImg: pimg12,
    },
    {
        pImg: pimg13,
    },
    {
        pImg: pimg14,
    },
    {
        pImg: pimg15,
    },
    {
        pImg: pimg16,
    },
    {
        pImg: pimg17,
    },
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
                                        alt="Client Logo" 
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