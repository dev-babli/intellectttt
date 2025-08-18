import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { MapPin, Globe, Users, Award, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/herosectionimages/New ONES/3.webp') center/cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const Section = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e293b;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MapSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
`;

const MapContainer = styled.div`
  height: 500px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const MapPlaceholder = styled.div`
  text-align: center;
  color: #64748b;
`;

const MapIcon = styled(Globe)`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: #3b82f6;
`;

const OfficeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const OfficeCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const OfficeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const OfficeIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const OfficeInfo = styled.div`
  flex: 1;
`;

const OfficeName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #1e293b;
`;

const OfficeLocation = styled.p`
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
`;

const OfficeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #475569;
`;

const RegionalSection = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px;
  padding: 3rem;
  margin-top: 4rem;
`;

const RegionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const RegionCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const RegionIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
`;

const RegionName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #1e293b;
`;

const RegionDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const RegionStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const RegionStat = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
`;

const RegionStatLabel = styled.div`
  font-size: 0.8rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #e53e3e 0%, #dc2626 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(229, 62, 62, 0.3);
  }
`;

// Office data
const offices = [
  {
    name: "North America",
    location: "New York, USA",
    icon: "🇺🇸",
    phone: "+1 (555) 123-4567",
    email: "na@intellectt.com",
    hours: "Mon-Fri 9AM-6PM EST",
    description: "Our flagship office serving the North American market with cutting-edge AI solutions."
  },
  {
    name: "Europe",
    location: "London, UK",
    icon: "🇬🇧",
    phone: "+44 20 7946 0958",
    email: "eu@intellectt.com",
    hours: "Mon-Fri 9AM-6PM GMT",
    description: "European headquarters driving innovation across the continent."
  },
  {
    name: "Asia Pacific",
    location: "Singapore",
    icon: "🇸🇬",
    phone: "+65 6789 0123",
    email: "ap@intellectt.com",
    hours: "Mon-Fri 9AM-6PM SGT",
    description: "APAC hub connecting technology leaders across the region."
  },
  {
    name: "India",
    location: "Bangalore, India",
    icon: "🇮🇳",
    phone: "+91 80 2222 3333",
    email: "in@intellectt.com",
    hours: "Mon-Fri 9AM-6PM IST",
    description: "Innovation center driving digital transformation in South Asia."
  }
];

// Regional expertise data
const regions = [
  {
    name: "North America",
    icon: "🌎",
    description: "Leading AI innovation with expertise in healthcare, finance, and technology sectors.",
    offices: 3,
    clients: 150
  },
  {
    name: "Europe",
    icon: "🌍",
    description: "Digital transformation specialists serving enterprise clients across the EU.",
    offices: 5,
    clients: 200
  },
  {
    name: "Asia Pacific",
    icon: "🌏",
    description: "Emerging technology hub with focus on smart cities and IoT solutions.",
    offices: 4,
    clients: 120
  }
];

const GlobalPresence = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Global Presence</HeroTitle>
            <HeroSubtitle>
              Serving clients across 50+ countries with local expertise and global innovation
            </HeroSubtitle>
          </motion.div>

          <StatsContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StatCard>
                <StatNumber>50+</StatNumber>
                <StatLabel>Countries Served</StatLabel>
              </StatCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StatCard>
                <StatNumber>12</StatNumber>
                <StatLabel>Global Offices</StatLabel>
              </StatCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <StatCard>
                <StatNumber>500+</StatNumber>
                <StatLabel>Happy Clients</StatLabel>
              </StatCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <StatCard>
                <StatNumber>24/7</StatNumber>
                <StatLabel>Global Support</StatLabel>
              </StatCard>
            </motion.div>
          </StatsContainer>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Our Global Network</SectionTitle>
        
        <MapSection>
          <MapContainer>
            <MapPlaceholder>
              <MapIcon />
              <h3>Interactive Global Map</h3>
              <p>Explore our worldwide presence and office locations</p>
            </MapPlaceholder>
          </MapContainer>
        </MapSection>

        <OfficeGrid>
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <OfficeCard>
                <OfficeHeader>
                  <OfficeIcon>{office.icon}</OfficeIcon>
                  <OfficeInfo>
                    <OfficeName>{office.name}</OfficeName>
                    <OfficeLocation>{office.location}</OfficeLocation>
                  </OfficeInfo>
                </OfficeHeader>
                
                <OfficeDetails>
                  <DetailItem>
                    <Phone size={16} />
                    <span>{office.phone}</span>
                  </DetailItem>
                  <DetailItem>
                    <Mail size={16} />
                    <span>{office.email}</span>
                  </DetailItem>
                  <DetailItem>
                    <Clock size={16} />
                    <span>{office.hours}</span>
                  </DetailItem>
                </OfficeDetails>
              </OfficeCard>
            </motion.div>
          ))}
        </OfficeGrid>
      </Section>

      <Section>
        <RegionalSection>
          <SectionTitle>Regional Expertise</SectionTitle>
          
          <RegionGrid>
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <RegionCard>
                  <RegionIcon>{region.icon}</RegionIcon>
                  <RegionName>{region.name}</RegionName>
                  <RegionDescription>{region.description}</RegionDescription>
                  
                  <RegionStats>
                    <RegionStat>
                      <StatValue>{region.offices}</StatValue>
                      <RegionStatLabel>Offices</RegionStatLabel>
                    </RegionStat>
                    <RegionStat>
                      <StatValue>{region.clients}</StatValue>
                      <RegionStatLabel>Clients</RegionStatLabel>
                    </RegionStat>
                  </RegionStats>
                </RegionCard>
              </motion.div>
            ))}
          </RegionGrid>
        </RegionalSection>
      </Section>

      <Section style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>
            Ready to Go Global?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Connect with our global team and discover how we can help transform your business worldwide.
          </p>
          <CTAButton to="/contact">
            Get in Touch
            <ArrowRight size={20} />
          </CTAButton>
        </motion.div>
      </Section>
    </PageContainer>
  );
};

export default GlobalPresence;
