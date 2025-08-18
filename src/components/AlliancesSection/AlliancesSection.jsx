import { Box, Grid, Typography, Container, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";

// Professional section container
const SectionContainer = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  position: "relative",
  padding: "80px 0",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)",
  },
}));

// Professional logo card - no hover animations
const LogoCard = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "32px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

// Professional heading
const SectionHeading = styled(Typography)(({ theme }) => ({
  color: "#1e293b",
  fontWeight: 600,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
  fontSize: "1.75rem",
}));

// Professional subtitle
const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: "#64748b",
  fontWeight: 400,
  lineHeight: 1.4,
  maxWidth: "350px",
  fontSize: "0.95rem",
  whiteSpace: "normal",
  wordWrap: "break-word",
  overflowWrap: "break-word",
}));

// Professional feature box
const FeatureBox = styled(Box)(({ theme }) => ({
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "24px",
  height: "100%",
}));

const AlliancesSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    certifications: 0,
    support: 0
  });

  const targetCounts = {
    projects: 500,
    satisfaction: 98,
    certifications: 50,
    support: 24
  };

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(targetCounts).forEach(key => {
          if (prev[key] < targetCounts[key]) {
            const increment = Math.ceil(targetCounts[key] / steps);
            newCounts[key] = Math.min(prev[key] + increment, targetCounts[key]);
            allComplete = false;
          } else {
            newCounts[key] = prev[key];
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const partners = [
    { src: "/partners/aws-logo.png", alt: "Amazon Web Services", name: "AWS" },
    { src: "/partners/google-cloud-logo.png", alt: "Google Cloud", name: "Google Cloud" },
    { src: "/partners/ibm.png", alt: "IBM", name: "IBM" },
    { src: "/partners/sap.png", alt: "SAP", name: "SAP" },
    { src: "/partners/salesforce-logo.png", alt: "Salesforce", name: "Salesforce" },
    { src: "/partners/red-hat-logo.png", alt: "Red Hat", name: "Red Hat" },
    { src: "/partners/citrix-logo.svg", alt: "Citrix", name: "Citrix" },
    { src: "/partners/uipath.png", alt: "UiPath", name: "UiPath" },
    { src: "/partners/automation-1.png", alt: "Automation Anywhere", name: "Automation Anywhere" },
  ];

  const partnershipBenefits = [
    {
      title: "Certified Expertise",
      description: "Advanced certifications across all major technology platforms",
      icon: "🏆"
    },
    {
      title: "Proven Track Record",
      description: "500+ enterprise projects with 98% client satisfaction",
      icon: "📈"
    },
    {
      title: "Global Delivery",
      description: "24/7 support across multiple time zones",
      icon: "🌍"
    },
    {
      title: "Innovation Focus",
      description: "Early adoption of emerging technologies",
      icon: "🚀"
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={5}>
          <SectionHeading variant="h3" component="h2" mb={2}>
            Strategic Technology Partnerships
          </SectionHeading>
          <SectionSubtitle variant="body1" sx={{ mx: "auto", mb: 0 }}>
            We partner with leading technology providers to deliver enterprise solutions.
          </SectionSubtitle>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Left Content - Partnership Overview */}
          <Grid item xs={12} lg={5}>
            <Box>
              <Typography variant="h4" fontWeight={600} color="#1e293b" mb={3}>
                Trusted by Global Enterprises
              </Typography>
              
              <Typography variant="body1" color="#64748b" lineHeight={1.7} mb={4}>
                Our strategic partnerships with world-class technology providers enable us to deliver 
                cutting-edge solutions that meet the most demanding enterprise requirements.
              </Typography>

              {/* Partnership Benefits */}
              <Grid container spacing={2}>
                {partnershipBenefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FeatureBox>
                      <Box display="flex" alignItems="flex-start" mb={1}>
                        <Typography variant="h5" mr={2}>
                          {benefit.icon}
                        </Typography>
                        <Typography variant="h6" fontWeight={600} color="#1e293b">
                          {benefit.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="#64748b" lineHeight={1.5}>
                        {benefit.description}
                      </Typography>
                    </FeatureBox>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Content - Partner Logos */}
          <Grid item xs={12} lg={7}>
            <Box>
              <Typography variant="h5" fontWeight={600} color="#1e293b" mb={3} textAlign="center">
                Our Technology Partners
              </Typography>
              
              <Grid container spacing={3}>
                {partners.map((partner, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <LogoCard>
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        style={{ 
                          maxHeight: 40, 
                          maxWidth: "100%",
                        }}
                      />
                    </LogoCard>
                  </Grid>
                ))}
              </Grid>

              {/* Partnership Stats */}
              <Box mt={4} p={3} bgcolor="#f8fafc" borderRadius="16px" border="1px solid #e2e8f0">
                <Typography variant="h6" fontWeight={600} color="#1e293b" mb={3} textAlign="center">
                  Partnership Impact
                </Typography>
                <Grid container spacing={3} textAlign="center">
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h4" fontWeight={700} color="#3b82f6">
                      {counts.projects}+
                    </Typography>
                    <Typography variant="body2" color="#64748b">
                      Projects Delivered
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h4" fontWeight={700} color="#3b82f6">
                      {counts.satisfaction}%
                    </Typography>
                    <Typography variant="body2" color="#64748b">
                      Client Satisfaction
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h4" fontWeight={700} color="#3b82f6">
                      {counts.certifications}+
                    </Typography>
                    <Typography variant="body2" color="#64748b">
                      Certifications
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h4" fontWeight={700} color="#3b82f6">
                      {counts.support}/7
                    </Typography>
                    <Typography variant="body2" color="#64748b">
                      Global Support
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default AlliancesSection;
