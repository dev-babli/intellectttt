import React, { Fragment } from "react";
import BlogList from "../../components/BlogList";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

const BlogPage = (props) => {
  return (
    <Fragment>
      
      <div className="page_content blog-page">
        <HeroSectionTitle
          title="Our Blog"
          subtitle="Explore our latest insights, trends, and expert opinions on the ever-evolving world of technology and business. From in-depth articles to quick tips, our blog is your go-to resource for staying informed and inspired."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Blog-header.webp"
        />
        <BlogList />
      </div>
     
    </Fragment>
  );
};
export default BlogPage;
