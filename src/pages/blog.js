import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogsQuery {
    allFile {
      nodes {
        name
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.site.siteMetadata.title} />;

export default BlogPage;
