
import React from "react";
import IndexHeader from "./index-sections/IndexHeader";
import DemoFooter from "./index-sections/DemoFooter";
import "../assest/demo/demo.css?v=1.2.0";
import SectionArticle from "./index-sections/SectionArticle.js";
import SectionDark from "./index-sections/SectionDark.js";
import SectionExamples from "./index-sections/SectionExamples.js";

function Index() {
 
  return (
    <>
  
     
      <div className="main">
      <IndexHeader />
        <SectionArticle />
        <SectionDark />
        <SectionExamples />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
