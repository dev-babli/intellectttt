import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import StaffAugmentationDetails from "../../components/StaffAugmentationDetails/StaffAugmentationDetails";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Cloud, 
  Security, 
  Analytics, 
  AutoAwesome,
  SmartToy,
  DataUsage,
  Psychology,
  CheckCircle,
  Memory,
  IntegrationInstructions,
  Sensors,
  Autorenew,
  RocketLaunch,
  Lightbulb,
  AutoFixHigh,
  People,
  Build,
  Code,
  Computer,
  ArrowForward,
  Star,
  Verified,
  Assignment,
  SwapHoriz,
  Receipt
} from '@mui/icons-material';
import icon1 from '../../images/icon/tp-work-icon01.svg';
import icon2 from '../../images/icon/tp-work-icon02.svg';
import icon3 from '../../images/icon/tp-work-icon03.svg';
import icon4 from '../../images/icon/tp-work-icon04.svg';
import icon5 from '../../images/icon/tp-work-icon05.svg';
import icon6 from '../../images/icon/tp-work-icon06.svg';

const ITStaffAugmentation = () => {
  useScrollToTop();

  return (
    <>
      {/* 1. Staff Augmentation - Hero Section */}
      <MasterSubServiceTemplate
        // Hero Section Props
        heroTitle="Staff Augmentation"
        heroSubtitle="Tech Team Scaling"
        heroDescription="Quickly scale your tech teams with vetted IT talent for project-based or long-term needs. Access skilled professionals and accelerate your development with flexible staffing solutions."
        heroBackgroundImage="/IT-Staff-Augmentation.webp"
        heroFeatures={[
          "Vetted IT Talent",
          "Quick Scaling",
          "Project-Based Hiring",
          "Flexible Contracts"
        ]}
        heroTheme="minimal"
        heroTextColor="black"

        // Disable all other sections from template
        showProblemSolution={false}
        showServiceOfferings={false}
        showBenefits={false}
        showFooter={false}
      />

      {/* 2. Our Augmentation Model */}
      <StaffAugmentationDetails />

      {/* 3. Talent Acquisition Challenges & Strategic Solutions - with original icons */}
      <section style={{ 
        backgroundColor: '#ffffff', 
        background: '#ffffff',
        paddingTop: '50px',
        paddingBottom: '130px',
        marginTop: '50px'
      }}>
        <div className="container">
          <div className="sec-title--two text-center mb-60">
            <h2 className="title">Talent Acquisition Challenges & Strategic Solutions</h2>
            <p className="subtitle" style={{ 
              marginTop: '15px', 
              fontSize: '0.95rem', 
              color: '#64748b',
              maxWidth: '400px',
              margin: '15px auto 0',
              lineHeight: '1.4',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              We understand the complexities of IT staffing and have the expertise to provide flexible workforce solutions
            </p>
          </div>
          <div className="tp-work-wrapp">
            <div className="row mt-none-30">
              <div className="col-lg-6 mt-30">
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={icon1} alt="Vetted IT Talent Pool" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title" style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700', 
                        color: '#1e293b',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>Vetted IT Talent Pool</h3>
                      <p className="xb-item--content" style={{ 
                        color: '#64748b', 
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        margin: 0
                      }}>Access to pre-vetted, skilled IT professionals ready to contribute to your projects immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={icon2} alt="Flexible Staffing Solutions" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title" style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700', 
                        color: '#1e293b',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>Flexible Staffing Solutions</h3>
                      <p className="xb-item--content" style={{ 
                        color: '#64748b', 
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        margin: 0
                      }}>Flexible staffing options that scale with your project needs and business requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={icon3} alt="Rapid Team Scaling" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title" style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700', 
                        color: '#1e293b',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>Rapid Team Scaling</h3>
                      <p className="xb-item--content" style={{ 
                        color: '#64748b', 
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        margin: 0
                      }}>Quick team scaling capabilities that allow you to meet project deadlines and business objectives.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={icon4} alt="Custom Solutions" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title" style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700', 
                        color: '#1e293b',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>Custom Solutions</h3>
                      <p className="xb-item--content" style={{ 
                        color: '#64748b', 
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        margin: 0
                      }}>Tailored staffing solutions designed specifically for your unique business requirements and industry needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ITStaffAugmentation;
