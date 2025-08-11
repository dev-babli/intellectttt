import React from "react";
import Footer from "../../components/footer/Footer";
import NewsGrid from "../../components/NewsCard/NewsGrid";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

const NewsAndAnnouncement = () => {
  return (
    <div>
      <HeroSectionTitle
        title="News and Announcements"
        subtitle="Stay updated with the latest news and announcements from our company. Explore our recent developments, product launches, and important updates that shape our journey and impact our community."
        buttonText="TALK TO OUR EXPERTS"
        buttonLink="#contact"
        backgroundImage="/News-and-Announcement.webp"
      />
      <div className="page_content news-and-announcement pt-70 pb-70 ">
        <NewsGrid />
      </div>
    </div>
  );
};

export default NewsAndAnnouncement;
