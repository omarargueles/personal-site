import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => {
  return (
    <Layout>
      <p>posts here!</p>
    </Layout>
  );
};

const Head = () => <Seo title="My blog posts" />;

export default BlogPage;
