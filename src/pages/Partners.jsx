import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon1 from "../images/icon/BD.webp";
import Icon2 from "../images/icon/Catalent.webp";
import Icon3 from "../images/icon/Cordis.webp";
import Icon4 from "../images/icon/Deloitte.webp";
import Icon5 from "../images/icon/Edwards-Lifesciences.webp";
import Icon6 from "../images/icon/Fidelity.webp";
import Icon7 from "../images/icon/Getinge.webp";
import Icon8 from "../images/icon/HCL.webp";
import Icon9 from "../images/icon/IBM.webp";
import Icon10 from "../images/icon/johnson and johnson.webp";
import Icon11 from "../images/icon/L&T.webp";
import Icon12 from "../images/icon/Livanova.webp";
import Icon13 from "../images/icon/Moderna.webp";
import Icon14 from "../images/icon/Satate-Street.webp";
import Icon15 from "../images/icon/Terumo.webp";
import Icon16 from "../images/icon/Vertex.webp";
import Icon17 from "../images/icon/Zimmer-Biomet.webp";

const Partners = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // All partners data with industry categorization
  const allPartners = [
    { name: "BD", logo: Icon1, industry: "healthcare" },
    { name: "Catalent", logo: Icon2, industry: "pharmaceuticals" },
    { name: "Cordis", logo: Icon3, industry: "healthcare" },
    { name: "Deloitte", logo: Icon4, industry: "consulting" },
    { name: "Edwards Lifesciences", logo: Icon5, industry: "healthcare" },
    { name: "Fidelity", logo: Icon6, industry: "finance" },
    { name: "Getinge", logo: Icon7, industry: "healthcare" },
    { name: "HCL", logo: Icon8, industry: "technology" },
    { name: "IBM", logo: Icon9, industry: "technology" },
    { name: "Johnson & Johnson", logo: Icon10, industry: "healthcare" },
    { name: "L&T", logo: Icon11, industry: "engineering" },
    { name: "LivaNova", logo: Icon12, industry: "healthcare" },
    { name: "Moderna", logo: Icon13, industry: "pharmaceuticals" },
    { name: "State Street", logo: Icon14, industry: "finance" },
    { name: "Terumo", logo: Icon15, industry: "healthcare" },
    { name: "Vertex", logo: Icon16, industry: "pharmaceuticals" },
    { name: "Zimmer Biomet", logo: Icon17, industry: "healthcare" },
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
          padding: "120px 0 80px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "#1a1a1a",
              margin: "0 0 20px 0",
              lineHeight: "1.1",
            }}
          >
            Our Partners
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#6b7280",
              margin: "0 0 40px 0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
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
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "60px",
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
                  padding: "12px 20px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  width: "300px",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0199d3";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                }}
              />
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              style={{
                padding: "12px 20px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "1rem",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0199d3";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
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
      <section style={{ padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
        >
          {/* Results Count */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "1.1rem", color: "#6b7280", margin: "0" }}>
              Showing {filteredPartners.length} of {allPartners.length} partners
            </p>
          </div>

          {/* Partners Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {filteredPartners.map((partner, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "40px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                {/* Partner Logo */}
                <div style={{ marginBottom: "20px" }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "80px",
                      objectFit: "contain",
                      filter: "none",
                      opacity: "1",
                    }}
                  />
                </div>

                {/* Partner Name */}
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    margin: "0 0 10px 0",
                  }}
                >
                  {partner.name}
                </h3>

                {/* Industry */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#0199d3",
                    margin: "0",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
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
                padding: "80px 20px",
                color: "#6b7280",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", margin: "0 0 10px 0" }}>
                No partners found
              </h3>
              <p style={{ fontSize: "1rem", margin: "0" }}>
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
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#1a1a1a",
              margin: "0 0 20px 0",
            }}
          >
            Ready to Partner with Us?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#6b7280",
              margin: "0 0 40px 0",
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
              backgroundColor: "#0199d3",
              color: "#ffffff",
              padding: "16px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#dc2626";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#0199d3";
              e.target.style.transform = "translateY(0)";
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
            padding: 80px 0 60px 0;
          }

          h1 {
            font-size: 2.5rem !important;
          }

          .search-filter {
            flex-direction: column !important;
            align-items: center !important;
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
            gap: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 20px !important;
          }

          h1 {
            font-size: 2rem !important;
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
