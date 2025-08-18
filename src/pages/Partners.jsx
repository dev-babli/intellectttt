import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon1 from "../images/icon/Abbott.webp";
import Icon2 from "../images/icon/Bayer.webp";
import Icon3 from "../images/icon/Cordis.webp";
import Icon4 from "../images/icon/Embecta.webp";
import Icon5 from "../images/icon/Exel.webp";
import Icon6 from "../images/icon/Integra.webp";
import Icon7 from "../images/icon/Livanova.webp";
import Icon8 from "../images/icon/Medline.webp";
import Icon9 from "../images/icon/Philips.webp";
import Icon10 from "../images/icon/ThermoFisher.webp";
import Icon11 from "../images/icon/Terumo.webp";
import Icon12 from "../images/icon/Xylem.webp";
import Icon13 from "../images/icon/Alkermes.webp";
import Icon14 from "../images/icon/PSB.webp";
import Icon15 from "../images/icon/MTRN.webp";
import Icon16 from "../images/icon/Aya.webp";
import Icon17 from "../images/icon/Rentschler.webp";

const Partners = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // All partners data with industry categorization
  const allPartners = [
    { name: "Abbott", logo: Icon1, industry: "healthcare" },
    { name: "Bayer", logo: Icon2, industry: "pharmaceuticals" },
    { name: "Cordis", logo: Icon3, industry: "healthcare" },
    { name: "Embecta", logo: Icon4, industry: "healthcare" },
    { name: "Exel", logo: Icon5, industry: "healthcare" },
    { name: "Integra", logo: Icon6, industry: "healthcare" },
    { name: "Livanova", logo: Icon7, industry: "healthcare" },
    { name: "Medline", logo: Icon8, industry: "healthcare" },
    { name: "Philips", logo: Icon9, industry: "healthcare" },
    { name: "Thermo Fisher", logo: Icon10, industry: "healthcare" },
    { name: "Terumo", logo: Icon11, industry: "healthcare" },
    { name: "Xylem", logo: Icon12, industry: "healthcare" },
    { name: "Alkermes", logo: Icon13, industry: "pharmaceuticals" },
    { name: "PSB Industries", logo: Icon14, industry: "healthcare" },
    { name: "MTRN", logo: Icon15, industry: "healthcare" },
    { name: "Aya", logo: Icon16, industry: "healthcare" },
    { name: "Rentschler", logo: Icon17, industry: "healthcare" },
  ];

  const industries = [
    { id: "all", name: "All Industries" },
    { id: "healthcare", name: "Healthcare" },
    { id: "pharmaceuticals", name: "Pharmaceuticals" },
    { id: "finance", name: "Finance" },
    { id: "technology", name: "Technology" },
    { id: "consulting", name: "Consulting" },
    { id: "engineering", name: "Engineering" },
  ];

  // Filter partners based on industry and search
  const filteredPartners = allPartners.filter((partner) => {
    const matchesIndustry =
      selectedIndustry === "all" || partner.industry === selectedIndustry;
    const matchesSearch = partner.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          padding: "6rem 0 4rem 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ 
            maxWidth: "1400px", 
            margin: "0 auto", 
            padding: "0 1.5rem" 
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "700",
              color: "#1f2937",
              margin: "0 0 1.5rem 0",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
            }}
          >
            Our Partners
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#6b7280",
              margin: "0 0 3rem 0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.6",
            }}
          >
            Trusted by 400+ leading companies across industries worldwide.
            Discover how we help organizations transform their digital
            capabilities.
          </p>

          {/* Search and Filter */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "0.75rem 1rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  width: "clamp(250px, 30vw, 300px)",
                  outline: "none",
                  transition: "all 0.2s ease",
                  backgroundColor: "#ffffff",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              style={{
                padding: "0.75rem 1rem",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "0.875rem",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                outline: "none",
                transition: "all 0.2s ease",
                minWidth: "150px",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.boxShadow = "none";
              }}
            >
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section style={{ padding: "4rem 0" }}>
        <div
          style={{ 
            maxWidth: "1400px", 
            margin: "0 auto", 
            padding: "0 1.5rem" 
          }}
        >
          {/* Results Count */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ 
              fontSize: "0.875rem", 
              color: "#6b7280", 
              margin: "0",
              fontWeight: "500",
            }}>
              Showing {filteredPartners.length} of {allPartners.length} partners
            </p>
          </div>

          {/* Partners Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredPartners.map((partner, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  border: "1px solid #e5e7eb",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-4px)";
                  e.target.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                  e.target.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                  e.target.style.borderColor = "#e5e7eb";
                }}
              >
                {/* Partner Logo */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "60px",
                      objectFit: "contain",
                      filter: "none",
                      opacity: "1",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>

                {/* Partner Name */}
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#1f2937",
                    margin: "0 0 0.5rem 0",
                    lineHeight: "1.3",
                  }}
                >
                  {partner.name}
                </h3>

                {/* Industry */}
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#3b82f6",
                    margin: "0",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {industries.find((i) => i.id === partner.industry)?.name}
                </p>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPartners.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 1rem",
                color: "#6b7280",
              }}
            >
              <h3 style={{ 
                fontSize: "1.25rem", 
                margin: "0 0 0.5rem 0",
                fontWeight: "600",
              }}>
                No partners found
              </h3>
              <p style={{ 
                fontSize: "0.875rem", 
                margin: "0",
                color: "#9ca3af",
              }}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto", 
          padding: "0 1.5rem" 
        }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: "700",
              color: "#1f2937",
              margin: "0 0 1rem 0",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
            }}
          >
            Ready to Partner with Us?
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "#6b7280",
              margin: "0 0 2rem 0",
              lineHeight: "1.6",
            }}
          >
            Join hundreds of leading companies that trust Intellectt to deliver
            innovative solutions and drive digital transformation.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: "600",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#3b82f6";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 0 3rem 0;
          }

          .search-filter {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
          }

          .search-input {
            width: 100% !important;
            max-width: 300px !important;
          }

          .partners-grid {
            grid-template-columns: repeat(
              auto-fill,
              minmax(250px, 1fr)
            ) !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem !important;
          }

          .partners-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
