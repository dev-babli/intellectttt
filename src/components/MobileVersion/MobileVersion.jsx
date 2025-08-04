import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import styled from "@emotion/styled";

// Styled Components for Mobile Version
const MobileContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
`;

const MobileHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const MobileLogo = styled.div`
  img {
    height: 32px;
    width: auto;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 999;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  overflow-y: auto;
  padding-top: 60px;
`;

const MobileSidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const MobileSidebarClose = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #333;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const MobileNav = styled.nav`
  padding: 1rem;
`;

const MobileNavSection = styled.div`
  margin-bottom: 1rem;
`;

const MobileNavSectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  font-weight: 600;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid #f3f4f6;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`;

const MobileNavSectionContent = styled.div`
  max-height: ${(props) => (props.isExpanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 1rem;
`;

const MobileNavItem = styled(Link)`
  display: block;
  padding: 10px 0;
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  border-bottom: 1px solid #f9fafb;

  &:hover {
    color: #333;
  }
`;

const MobileSearchBar = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const MobileSearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  background: #f9fafb;

  &:focus {
    outline: none;
    border-color: #6366f1;
    background: #ffffff;
  }
`;

const MobileContent = styled.main`
  padding-top: 60px;
  min-height: calc(100vh - 60px);
`;

const MobileHero = styled.section`
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const MobileHeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const MobileHeroSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.5;
`;

const MobileCTAButton = styled(Link)`
  display: inline-block;
  background: #ff8a4c;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #ff7a3c;
    transform: translateY(-2px);
  }
`;

const MobileSection = styled.section`
  padding: 2rem 1rem;
`;

const MobileSectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const MobileCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

const MobileCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MobileCardText = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
`;

const MobileFooter = styled.footer`
  background: #f8f9fa;
  padding: 2rem 1rem;
  color: #333;
`;

const MobileFooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const MobileFooterTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MobileFooterLink = styled(Link)`
  display: block;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 4px 0;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

const MobileFooterBottom = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.8rem;
  color: #6b7280;
`;

const MobileVersion = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Search:", searchQuery);
  };

  const handleNavClick = (url) => {
    closeSidebar();
    navigate(url);
  };

  return (
    <MobileContainer>
      {/* Mobile Header */}
      <MobileHeader>
        <MobileLogo>
          <Link to="/">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
              alt="Intellectt"
            />
          </Link>
        </MobileLogo>
        <MobileMenuButton onClick={toggleSidebar}>
          <Menu size={24} />
        </MobileMenuButton>
      </MobileHeader>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen}>
        <MobileSidebarHeader>
          <MobileLogo>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
              alt="Intellectt"
            />
          </MobileLogo>
          <MobileSidebarClose onClick={closeSidebar}>
            <X size={20} />
          </MobileSidebarClose>
        </MobileSidebarHeader>

        {/* Mobile Search */}
        <MobileSearchBar>
          <form onSubmit={handleSearch}>
            <MobileSearchInput
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </MobileSearchBar>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavSection>
            <MobileNavSectionTitle onClick={() => toggleSection("whatWeDo")}>
              WHAT WE DO
              {expandedSections.whatWeDo ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </MobileNavSectionTitle>
            <MobileNavSectionContent isExpanded={expandedSections.whatWeDo}>
              <MobileNavItem
                to="/service/ai-and-gen-ai"
                onClick={() => handleNavClick("/service/ai-and-gen-ai")}
              >
                AI & GenAI Practice
              </MobileNavItem>
              <MobileNavItem
                to="/service/cloud-and-application"
                onClick={() => handleNavClick("/service/cloud-and-application")}
              >
                Cloud & Application Services
              </MobileNavItem>
              <MobileNavItem
                to="/service/sap-services"
                onClick={() => handleNavClick("/service/sap-services")}
              >
                SAP Services
              </MobileNavItem>
              <MobileNavItem
                to="/service/managed-it-services"
                onClick={() => handleNavClick("/service/managed-it-services")}
              >
                Managed IT Services
              </MobileNavItem>
              <MobileNavItem
                to="/service/data-and-analytics"
                onClick={() => handleNavClick("/service/data-and-analytics")}
              >
                Data & Analytics
              </MobileNavItem>
            </MobileNavSectionContent>
          </MobileNavSection>

          <MobileNavSection>
            <MobileNavSectionTitle
              onClick={() => toggleSection("whoWeWorkWith")}
            >
              WHO WE WORK WITH
              {expandedSections.whoWeWorkWith ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </MobileNavSectionTitle>
            <MobileNavSectionContent
              isExpanded={expandedSections.whoWeWorkWith}
            >
              <MobileNavItem
                to="/industries/helthcare-and-life-sciences"
                onClick={() =>
                  handleNavClick("/industries/helthcare-and-life-sciences")
                }
              >
                Healthcare & Life Sciences
              </MobileNavItem>
              <MobileNavItem
                to="/industries/menufacturing-and-automotive"
                onClick={() =>
                  handleNavClick("/industries/menufacturing-and-automotive")
                }
              >
                Manufacturing & Automotive
              </MobileNavItem>
              <MobileNavItem
                to="/industries/aerospace-and-defense"
                onClick={() =>
                  handleNavClick("/industries/aerospace-and-defense")
                }
              >
                Aerospace & Defense
              </MobileNavItem>
              <MobileNavItem
                to="/industries/banking-and-financial-services"
                onClick={() =>
                  handleNavClick("/industries/banking-and-financial-services")
                }
              >
                Banking & Financial Services
              </MobileNavItem>
            </MobileNavSectionContent>
          </MobileNavSection>

          <MobileNavSection>
            <MobileNavSectionTitle onClick={() => toggleSection("insights")}>
              INSIGHTS
              {expandedSections.insights ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </MobileNavSectionTitle>
            <MobileNavSectionContent isExpanded={expandedSections.insights}>
              <MobileNavItem to="/blog" onClick={() => handleNavClick("/blog")}>
                Blog
              </MobileNavItem>
              <MobileNavItem
                to="/case-studies"
                onClick={() => handleNavClick("/case-studies")}
              >
                Case Studies
              </MobileNavItem>
            </MobileNavSectionContent>
          </MobileNavSection>

          <MobileNavSection>
            <MobileNavSectionTitle onClick={() => toggleSection("whoWeAre")}>
              WHO WE ARE
              {expandedSections.whoWeAre ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </MobileNavSectionTitle>
            <MobileNavSectionContent isExpanded={expandedSections.whoWeAre}>
              <MobileNavItem
                to="/about"
                onClick={() => handleNavClick("/about")}
              >
                About Us
              </MobileNavItem>
              <MobileNavItem
                to="/leadership-team"
                onClick={() => handleNavClick("/leadership-team")}
              >
                Leadership Team
              </MobileNavItem>
              <MobileNavItem
                to="/global-presence"
                onClick={() => handleNavClick("/global-presence")}
              >
                Global Presence
              </MobileNavItem>
              <MobileNavItem
                to="/cybersecurity"
                onClick={() => handleNavClick("/cybersecurity")}
              >
                Cybersecurity
              </MobileNavItem>
              <MobileNavItem
                to="/digital-transformation"
                onClick={() => handleNavClick("/digital-transformation")}
              >
                Digital Transformation
              </MobileNavItem>
              <MobileNavItem
                to="/innovation"
                onClick={() => handleNavClick("/innovation")}
              >
                Innovation
              </MobileNavItem>
            </MobileNavSectionContent>
          </MobileNavSection>

          <MobileNavSection>
            <MobileNavSectionTitle onClick={() => toggleSection("careers")}>
              CAREERS
              {expandedSections.careers ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </MobileNavSectionTitle>
            <MobileNavSectionContent isExpanded={expandedSections.careers}>
              <MobileNavItem
                to="/career"
                onClick={() => handleNavClick("/career")}
              >
                Current Openings
              </MobileNavItem>
              <MobileNavItem
                to="/life-at-company"
                onClick={() => handleNavClick("/life-at-company")}
              >
                Life at Company
              </MobileNavItem>
            </MobileNavSectionContent>
          </MobileNavSection>

          <MobileNavSection>
            <MobileNavItem
              to="/partners"
              onClick={() => handleNavClick("/partners")}
            >
              Partners
            </MobileNavItem>
            <MobileNavItem
              to="/contact"
              onClick={() => handleNavClick("/contact")}
              style={{ fontWeight: "600", color: "#6366f1" }}
            >
              Contact Us
            </MobileNavItem>
          </MobileNavSection>
        </MobileNav>
      </MobileSidebar>

      {/* Mobile Content */}
      <MobileContent>
        {/* Mobile Hero Section */}
        <MobileHero>
          <MobileHeroTitle>Shaping the Future of Intelligence</MobileHeroTitle>
          <MobileHeroSubtitle>
            Empowering businesses with cutting-edge technology solutions and
            innovative AI-driven strategies.
          </MobileHeroSubtitle>
          <MobileCTAButton to="/contact">Get Started</MobileCTAButton>
        </MobileHero>

        {/* Mobile Services Section */}
        <MobileSection>
          <MobileSectionTitle>Our Services</MobileSectionTitle>

          <MobileCard>
            <MobileCardTitle>AI & GenAI Practice</MobileCardTitle>
            <MobileCardText>
              Transform your business with advanced artificial intelligence and
              generative AI solutions.
            </MobileCardText>
          </MobileCard>

          <MobileCard>
            <MobileCardTitle>Cloud & Application Services</MobileCardTitle>
            <MobileCardText>
              Scalable cloud solutions and modern application development for
              your digital transformation.
            </MobileCardText>
          </MobileCard>

          <MobileCard>
            <MobileCardTitle>Data & Analytics</MobileCardTitle>
            <MobileCardText>
              Unlock insights from your data with advanced analytics and
              business intelligence solutions.
            </MobileCardText>
          </MobileCard>

          <MobileCard>
            <MobileCardTitle>Managed IT Services</MobileCardTitle>
            <MobileCardText>
              Comprehensive IT management and support to keep your business
              running smoothly.
            </MobileCardText>
          </MobileCard>
        </MobileSection>

        {/* Mobile Industries Section */}
        <MobileSection>
          <MobileSectionTitle>Industries We Serve</MobileSectionTitle>

          <MobileCard>
            <MobileCardTitle>Healthcare & Life Sciences</MobileCardTitle>
            <MobileCardText>
              Innovative solutions for healthcare providers and life sciences
              organizations.
            </MobileCardText>
          </MobileCard>

          <MobileCard>
            <MobileCardTitle>Manufacturing & Automotive</MobileCardTitle>
            <MobileCardText>
              Smart manufacturing solutions and automotive technology
              innovations.
            </MobileCardText>
          </MobileCard>

          <MobileCard>
            <MobileCardTitle>Banking & Financial Services</MobileCardTitle>
            <MobileCardText>
              Secure and scalable solutions for financial institutions and
              fintech companies.
            </MobileCardText>
          </MobileCard>
        </MobileSection>

        {/* Mobile Footer */}
        <MobileFooter>
          <MobileFooterSection>
            <MobileFooterTitle>Company</MobileFooterTitle>
            <MobileFooterLink to="/about">About Us</MobileFooterLink>
            <MobileFooterLink to="/career">Careers</MobileFooterLink>
            <MobileFooterLink to="/contact">Contact</MobileFooterLink>
            <MobileFooterLink to="/blog">Blog</MobileFooterLink>
          </MobileFooterSection>

          <MobileFooterSection>
            <MobileFooterTitle>Services</MobileFooterTitle>
            <MobileFooterLink to="/service/ai-and-gen-ai">
              AI & GenAI
            </MobileFooterLink>
            <MobileFooterLink to="/service/cloud-and-application">
              Cloud & App
            </MobileFooterLink>
            <MobileFooterLink to="/service/data-and-analytics">
              Data & Analytics
            </MobileFooterLink>
            <MobileFooterLink to="/service/managed-it-services">
              Managed IT
            </MobileFooterLink>
          </MobileFooterSection>

          <MobileFooterSection>
            <MobileFooterTitle>Industries</MobileFooterTitle>
            <MobileFooterLink to="/industries/helthcare-and-life-sciences">
              Healthcare
            </MobileFooterLink>
            <MobileFooterLink to="/industries/menufacturing-and-automotive">
              Manufacturing
            </MobileFooterLink>
            <MobileFooterLink to="/industries/banking-and-financial-services">
              Banking
            </MobileFooterLink>
          </MobileFooterSection>

          <MobileFooterBottom>
            © 2024 Intellectt. All rights reserved.
          </MobileFooterBottom>
        </MobileFooter>
      </MobileContent>
    </MobileContainer>
  );
};

export default MobileVersion;
