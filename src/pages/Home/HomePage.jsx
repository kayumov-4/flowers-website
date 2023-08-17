import React from "react";
import Intro from "./Intro";
import NewFlowers from "./NewFlowers/NewFlowers";
import Relevant from "./Relevant";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Intro />
      <NewFlowers title={"New"} />
      <Relevant />
    </div>
  );
};

export default HomePage;
