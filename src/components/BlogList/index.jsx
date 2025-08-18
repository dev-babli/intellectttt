import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSidebar from '../BlogSidebar';
import icon1 from '../../images/icon/prev-icon.png'
import icon2 from '../../images/icon/next-icon.png'
import bImg from '../../images/blog/b-img01.jpg'

// Industry Card images paths
const industryImages = [
    { src: '/Industry Card images/Aerospace and Defense.webp', title: 'Aerospace and Defense', category: 'Industry' },
    { src: '/Industry Card images/Baking and Financial.webp', title: 'Banking and Financial', category: 'Industry' },
    { src: '/Industry Card images/Education and Training.webp', title: 'Education and Training', category: 'Industry' },
    { src: '/Industry Card images/Healthcar and Lifesciences.webp', title: 'Healthcare and Lifesciences', category: 'Industry' },
    { src: '/Industry Card images/Manufacturing and Automotive.webp', title: 'Manufacturing and Automotive', category: 'Industry' },
    { src: '/Industry Card images/Retail and Ecommerce.webp', title: 'Retail and Ecommerce', category: 'Industry' },
    { src: '/Industry Card images/Logotstic and Transportation.webp', title: 'Logistics and Transportation', category: 'Industry' },
    { src: '/Industry Card images/Energy and Utilities.webp', title: 'Energy and Utilities', category: 'Industry' }
];

// Service Cards images paths
const serviceImages = [
    { src: '/Service Cards images/AI Gen AI.webp', title: 'AI Gen AI', category: 'Service' },
    { src: '/Service Cards images/Cloud and Application Service.webp', title: 'Cloud and Application Service', category: 'Service' },
    { src: '/Service Cards images/Data Analytics.webp', title: 'Data Analytics', category: 'Service' },
    { src: '/Service Cards images/Digital Security.webp', title: 'Digital Security', category: 'Service' },
    { src: '/Service Cards images/Healthcare and Lifesciences.webp', title: 'Healthcare and Lifesciences', category: 'Service' },
    { src: '/Service Cards images/Engineering and Manufacturing.webp', title: 'Engineering and Manufacturing', category: 'Service' },
    { src: '/Service Cards images/IOT Tech.webp', title: 'IOT Tech', category: 'Service' },
    { src: '/Service Cards images/Talent Solution.webp', title: 'Talent Solution', category: 'Service' }
];

const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Debug: Log image paths to console
    useEffect(() => {
        console.log('Industry Images:', industryImages);
        console.log('Service Images:', serviceImages);
    }, []);

    return (
        <div>
            <div className="blog pt-70" style={{ padding: '2rem 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="blog-slider swiper-container pos-rel" style={{ position: 'relative' }}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            speed={800}
                            parallax={true}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                            }}
                        >
                            {blogs.slice(0, 3).map((blog, Bitem) => {
                                // Combine industry and service images for blog posts
                                const allImages = [...industryImages, ...serviceImages];
                                const blogImage = allImages[Bitem % allImages.length]; // Cycle through images
                                
                                return (
                                    <SwiperSlide key={Bitem}>
                                        <div className="blog-slide-item" style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                        }}>
                                            <div className="xb-item--img" style={{
                                                flex: '1',
                                                minHeight: '300px',
                                                overflow: 'hidden',
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                position: 'relative'
                                            }}>
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} style={{ display: 'block', height: '100%' }}>
                                                    <img 
                                                        src={blogImage.src} 
                                                        alt={blogImage.title} 
                                                        onError={(e) => {
                                                            console.error('Failed to load blog image:', blogImage.src);
                                                            e.target.style.display = 'none';
                                                        }}
                                                        onLoad={() => {
                                                            console.log('Successfully loaded blog image:', blogImage.src);
                                                        }}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            transition: 'transform 0.3s ease',
                                                            '&:hover': {
                                                                transform: 'scale(1.05)',
                                                            }
                                                        }}
                                                    />
                                                    {/* Image overlay with title */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: '0',
                                                        left: '0',
                                                        right: '0',
                                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                                        padding: '1.5rem',
                                                        color: 'white',
                                                        zIndex: '2'
                                                    }}>
                                                        <span style={{
                                                            display: 'inline-block',
                                                            background: blogImage.category === 'Industry' ? '#3b82f6' : '#10b981',
                                                            color: '#ffffff',
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '4px',
                                                            fontSize: '0.75rem',
                                                            fontWeight: '600',
                                                            marginBottom: '0.5rem',
                                                            textTransform: 'uppercase'
                                                        }}>
                                                            {blogImage.category}
                                                        </span>
                                                        <h3 style={{
                                                            fontSize: '1.25rem',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            lineHeight: '1.3'
                                                        }}>
                                                            {blogImage.title}
                                                        </h3>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="xb-item--holder" style={{
                                                padding: '2rem',
                                                background: '#ffffff',
                                                flex: '1',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                            }}>
                                                <div>
                                                    <Link 
                                                        onClick={ClickHandler} 
                                                        to={`/blog-single/${blog.slug}`} 
                                                        className="xb-item--tag"
                                                        style={{
                                                            display: 'inline-block',
                                                            background: '#3b82f6',
                                                            color: '#ffffff',
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '4px',
                                                            fontSize: '0.75rem',
                                                            fontWeight: '600',
                                                            textDecoration: 'none',
                                                            marginBottom: '1rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.05em',
                                                        }}
                                                    >
                                                        software
                                                    </Link>
                                                    <h2 className="xb-item--title border-effect" style={{
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        color: '#1f2937',
                                                        marginBottom: '1rem',
                                                        lineHeight: '1.3',
                                                        letterSpacing: '-0.01em',
                                                    }}>
                                                        <Link 
                                                            onClick={ClickHandler} 
                                                            to={`/blog-single/${blog.slug}`}
                                                            style={{
                                                                color: 'inherit',
                                                                textDecoration: 'none',
                                                                '&:hover': {
                                                                    color: '#3b82f6',
                                                                }
                                                            }}
                                                        >
                                                            {blog.title}
                                                        </Link>
                                                    </h2>
                                                    <p className="xb-item--content" style={{
                                                        color: '#6b7280',
                                                        fontSize: '0.875rem',
                                                        lineHeight: '1.6',
                                                        margin: '0',
                                                    }}>
                                                        Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                        <div className="blog-item_button" style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0 1rem',
                            zIndex: 10,
                        }}>
                            <div 
                                className="blog-swiper-btn swiper-button-prev" 
                                ref={prevRef}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#ffffff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                                    }
                                }}
                            >
                                <img src={icon1} alt="" style={{ width: '16px', height: '16px' }} />
                            </div>
                            <div 
                                className="blog-swiper-btn swiper-button-next" 
                                ref={nextRef}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#ffffff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                                    }
                                }}
                            >
                                <img src={icon2} alt="" style={{ width: '16px', height: '16px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industry and Service Images Section */}
            <section className="images-gallery-section" style={{ 
                padding: '2rem 0',
                background: '#ffffff',
                borderTop: '1px solid #e5e7eb'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    
                    {/* Industry Images Section */}
                    <div className="industry-images-section" style={{ marginBottom: '2rem' }}>
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#1f2937',
                                marginBottom: '0.75rem'
                            }}>
                                Industry Solutions ({industryImages.length} Images)
                            </h2>
                            <p style={{
                                fontSize: '1rem',
                                color: '#6b7280',
                                maxWidth: '500px',
                                margin: '0 auto'
                            }}>
                                Explore our comprehensive industry-specific solutions designed to meet the unique challenges of your sector.
                            </p>
                        </div>
                        <div className="images-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '1.5rem'
                        }}>
                            {industryImages.map((image, index) => (
                                <div key={index} className="image-card" style={{
                                    background: '#ffffff',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                    <div className="image-container" style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: '200px'
                                    }}>
                                        <img 
                                            src={image.src} 
                                            alt={image.title}
                                            onError={(e) => {
                                                console.error('Failed to load industry image:', image.src);
                                                e.target.style.display = 'none';
                                            }}
                                            onLoad={() => {
                                                console.log('Successfully loaded industry image:', image.src);
                                            }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                }
                                            }}
                                        />
                                        <div className="image-overlay" style={{
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            right: '0',
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                            padding: '1.5rem',
                                            color: '#ffffff'
                                        }}>
                                            <span className="category-badge" style={{
                                                display: 'inline-block',
                                                background: '#3b82f6',
                                                color: '#ffffff',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '4px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                marginBottom: '0.5rem',
                                                textTransform: 'uppercase'
                                            }}>
                                                {image.category}
                                            </span>
                                            <h3 style={{
                                                fontSize: '1.25rem',
                                                fontWeight: '600',
                                                margin: '0',
                                                lineHeight: '1.3'
                                            }}>
                                                {image.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Service Images Section */}
                    <div className="service-images-section">
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#1f2937',
                                marginBottom: '0.75rem'
                            }}>
                                Our Services ({serviceImages.length} Images)
                            </h2>
                            <p style={{
                                fontSize: '1rem',
                                color: '#6b7280',
                                maxWidth: '500px',
                                margin: '0 auto'
                            }}>
                                Discover our cutting-edge services that drive innovation and digital transformation.
                            </p>
                        </div>
                        <div className="images-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {serviceImages.map((image, index) => (
                                <div key={index} className="image-card" style={{
                                    background: '#ffffff',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                    <div className="image-container" style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: '200px'
                                    }}>
                                        <img 
                                            src={image.src} 
                                            alt={image.title}
                                            onError={(e) => {
                                                console.error('Failed to load service image:', image.src);
                                                e.target.style.display = 'none';
                                            }}
                                            onLoad={() => {
                                                console.log('Successfully loaded service image:', image.src);
                                            }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                }
                                            }}
                                        />
                                        <div className="image-overlay" style={{
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            right: '0',
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                            padding: '1.5rem',
                                            color: '#ffffff'
                                        }}>
                                            <span className="category-badge" style={{
                                                display: 'inline-block',
                                                background: '#10b981',
                                                color: '#ffffff',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '4px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                marginBottom: '0.5rem',
                                                textTransform: 'uppercase'
                                            }}>
                                                {image.category}
                                            </span>
                                            <h3 style={{
                                                fontSize: '1.25rem',
                                                fontWeight: '600',
                                                margin: '0',
                                                lineHeight: '1.3'
                                            }}>
                                                {image.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog_details_section pb-130 mt-120" style={{ 
                paddingBottom: '2rem', 
                marginTop: '2rem',
                background: '#f8fafc',
                padding: '2rem 0'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="row mt-none-30 g-0 align-items-start" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        margin: '0',
                        alignItems: 'flex-start'
                    }}>
                        <div className="col-lg-8 mt-30" style={{ 
                            flex: '1 1 600px',
                            minWidth: '300px',
                            marginTop: '0'
                        }}>
                            <div className="blog_details_content">
                                {blogs.slice(0, 6).map((blog, Bitem) => {
                                    // Combine industry and service images for blog details
                                    const allImages = [...industryImages, ...serviceImages];
                                    const blogDetailImage = allImages[Bitem % allImages.length]; // Cycle through images
                                    
                                    return (
                                        <div className="blog_details_item ul_li" key={Bitem} style={{
                                            background: '#ffffff',
                                            borderRadius: '8px',
                                            padding: '1.5rem',
                                            marginBottom: '1.5rem',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                            border: '1px solid rgba(0,0,0,0.05)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                            }
                                        }}>
                                        <div className="xb-item--img" style={{
                                            marginBottom: '1rem',
                                            borderRadius: '6px',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            position: 'relative',
                                            height: '150px'
                                        }}>
                                            <Link onClick={ClickHandler} to="/blog" style={{ display: 'block', height: '100%' }}>
                                                <img 
                                                    src={blogDetailImage.src} 
                                                    alt={blogDetailImage.title} 
                                                    onError={(e) => {
                                                        console.error('Failed to load blog detail image:', blogDetailImage.src);
                                                        e.target.style.display = 'none';
                                                    }}
                                                    onLoad={() => {
                                                        console.log('Successfully loaded blog detail image:', blogDetailImage.src);
                                                    }}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                        }
                                                    }}
                                                />
                                                {/* Image overlay with title */}
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '0',
                                                    left: '0',
                                                    right: '0',
                                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                                    padding: '1rem',
                                                    color: 'white',
                                                    zIndex: '2'
                                                }}>
                                                    <span style={{
                                                        display: 'inline-block',
                                                        background: blogDetailImage.category === 'Industry' ? '#3b82f6' : '#10b981',
                                                        color: '#ffffff',
                                                        padding: '0.125rem 0.5rem',
                                                        borderRadius: '3px',
                                                        fontSize: '0.625rem',
                                                        fontWeight: '600',
                                                        marginBottom: '0.25rem',
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        {blogDetailImage.category}
                                                    </span>
                                                    <h4 style={{
                                                        fontSize: '0.875rem',
                                                        fontWeight: '600',
                                                        margin: '0',
                                                        lineHeight: '1.2'
                                                    }}>
                                                        {blogDetailImage.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="xb-item--holder">
                                                                                            <span className="xb-item--text" style={{
                                                    display: 'inline-block',
                                                    background: '#3b82f6',
                                                    color: '#ffffff',
                                                    padding: '0.125rem 0.5rem',
                                                    borderRadius: '3px',
                                                    fontSize: '0.625rem',
                                                    fontWeight: '600',
                                                    marginBottom: '0.75rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                }}>
                                                    {blog.thumb}
                                                </span>
                                                <h3 className="xb-item--title border-effect" style={{
                                                    fontSize: '1rem',
                                                    fontWeight: '700',
                                                    color: '#1f2937',
                                                    marginBottom: '0.75rem',
                                                    lineHeight: '1.3',
                                                    letterSpacing: '-0.01em',
                                                }}>
                                                <Link 
                                                    onClick={ClickHandler} 
                                                    to={`/blog-single/${blog.slug}`}
                                                    style={{
                                                        color: 'inherit',
                                                        textDecoration: 'none',
                                                        '&:hover': {
                                                            color: '#3b82f6',
                                                        }
                                                    }}
                                                >
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                                                                            <span className="xb-item--content" style={{
                                                    color: '#6b7280',
                                                    fontSize: '0.75rem',
                                                    lineHeight: '1.5',
                                                    display: 'block',
                                                    marginBottom: '1rem',
                                                }}>
                                                    {blog.description}
                                                </span>
                                                <div className="xb-item--button mt-50" style={{ marginTop: '1rem' }}>
                                                <Link 
                                                    onClick={ClickHandler} 
                                                    to={`/blog-single/${blog.slug}`}
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.25rem',
                                                        color: '#3b82f6',
                                                        textDecoration: 'none',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        transition: 'all 0.2s ease',
                                                        '&:hover': {
                                                            color: '#2563eb',
                                                            transform: 'translateX(2px)',
                                                        }
                                                    }}
                                                >
                                                    Read more <i className="far fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                                <ul className="blog-pagination ul_li" style={{
                                    listStyle: 'none',
                                    padding: '0',
                                    margin: '2rem 0 0 0',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                }}>
                                    <li>
                                        <Link onClick={ClickHandler} to="#" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            color: '#6b7280',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: '#3b82f6',
                                                color: '#ffffff',
                                                borderColor: '#3b82f6',
                                            }
                                        }}>
                                            <i className="fas fa-chevron-double-left"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            color: '#6b7280',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: '#3b82f6',
                                                color: '#ffffff',
                                                borderColor: '#3b82f6',
                                            }
                                        }}>
                                            1
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link onClick={ClickHandler} to="#" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#3b82f6',
                                            border: '1px solid #3b82f6',
                                            borderRadius: '8px',
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                        }}>
                                            2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            color: '#6b7280',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: '#3b82f6',
                                                color: '#ffffff',
                                                borderColor: '#3b82f6',
                                            }
                                        }}>
                                            3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            color: '#6b7280',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: '#3b82f6',
                                                color: '#ffffff',
                                                borderColor: '#3b82f6',
                                            }
                                        }}>
                                            <i className="fas fa-chevron-double-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogList;
