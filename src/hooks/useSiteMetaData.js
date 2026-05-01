import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function useSiteMetaData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // TODO: improve return siteMetadata
  return data.site.siteMetadata;
}

export default useSiteMetaData;
