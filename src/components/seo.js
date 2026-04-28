import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetaData from "../hooks/useSiteMetaData";

const Seo = ({ title }) => {
  const siteMetadata = useSiteMetaData();

  return (
    <title>
      {title} | {siteMetadata.title}
    </title>
  );
};

export default Seo;
