import React from "react";
import Button from "../Button";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BlobSvg, IntroContainer } from "./styles";

const Blob = () => {
  return (
    <BlobSvg
      xmlns="http://www.w3.org/2000/svg"
      width="897.336"
      height="539.463"
      viewBox="0 0 897.336 539.463"
    >
      <g id="blob-shape" transform="translate(211.486 108.162)">
        <path
          id="Path_3"
          data-name="Path 3"
          d="M497.965-20.123C590.928,39.425,702,132.368,683.891,196.141s-165.17,98.174-292.8,144.444C263.458,386.654,155.479,444.794,38.226,428.5-79.027,412.4-205.554,322.077-211.3,227.122-216.816,132.368-101.55,33.189-3.508-27.566c97.821-60.554,178.419-82.482,256.146-80.47C330.365-105.824,405.222-79.671,497.965-20.123Z"
          transform="translate(0)"
          fill="rgba(165,140,95,0.12)"
        />
      </g>
    </BlobSvg>
  );
};

const Intro = ({ data }) => {
  let { title, content } = data.fields;
  content = documentToHtmlString(content);

  return (
    <IntroContainer>
      <div className="intro-content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <Button text={"Walnut 5000"} href={"/products/walnut-5000"} />
      </div>
      <div className="intro-product">
        <img src={"./assets/walnut-5000.png"} alt="Walnut 5000" />
        <Blob />
      </div>
    </IntroContainer>
  );
};

export default Intro;
