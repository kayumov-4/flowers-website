import React from "react";
import Intro from "./Intro";
import NewFlowers from "./NewFlowers/NewFlowers";
import Relevant from "./Relevant";
import Breadcrumbs from "../../components/UI/BreadCrumb";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="h-[52px]  flex items-center justify-start">
        <Breadcrumbs />
      </div>
      <Intro />
      <NewFlowers title={"New"} />
      <Relevant />
    </div>
  );
};

export default HomePage;
