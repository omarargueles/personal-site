import React from "react";
import Frame from "../components/frame";
import Seo from "../components/seo";

const GalleryPage = () => {
  return (
    <Frame>
      <p>this text is children text</p>
    </Frame>
  );
};

export const Head = () => <Seo title="Gallery Page" />;

export default GalleryPage;
