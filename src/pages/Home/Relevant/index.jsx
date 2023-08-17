import React, { useState } from "react";
import data from "../../../db";
import Card from "../../../components/UI/Card";
const index = () => {
  const { newFlowers } = data;
  const [counter, setCounter] = useState(0);
  const wrapperStyle = {
    transform: `translateX(-${counter * 300}px)`,
  };

  const prevSlide = () => {
    const wrapper = document.querySelector(".wrapper_carousel");
    setCounter((prevCounter) =>
      prevCounter === 0 ? newFlowers.length - 1 : prevCounter - 1
    );
    if (counter == 0) {
      setCounter(0);
      wrapper.classList.add(`translate-x-[2400}px]`);
    }
    wrapper.classList.add("translate-x-[300px]");
  };
  const nextSlide = () => {
    const wrapper = document.querySelector(".wrapper_carousel");
    setCounter((prevCounter) =>
      prevCounter === newFlowers.length - 1 ? 0 : prevCounter + 1
    );
    wrapper.classList.add(`translate-x-[-${counter * 300}px]`);
    if (counter == 4) {
      setCounter(0);
      wrapper.classList.add(`translate-x-[2400}px]`);
    }
  };
  return (
    <div className="mb-[100px] overflow-x-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] mb-11">Relevant</h2>
        <div className="flex items-center gap-5">
          <svg
            onClick={() => prevSlide()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-Rule="evenodd"
              clip-Rule="evenodd"
              d="M7.85981 8.11673C7.6729 7.96109 7.36985 7.96109 7.18293 8.11673L2.14019 12.3158L2.084 12.3719C1.95329 12.53 1.97541 12.7488 2.14834 12.8861L7.19108 16.8899L7.25866 16.9347C7.44823 17.0386 7.70562 17.0181 7.86777 16.8765L7.92156 16.8202C8.04631 16.6624 8.02172 16.448 7.85166 16.313L3.67891 13H22.5238L22.6094 12.9919C22.8315 12.9496 23 12.7455 23 12.5C23 12.2239 22.7868 12 22.5238 12H3.87229L7.85981 8.68037L7.91519 8.62517C8.04442 8.46984 8.02596 8.25508 7.85981 8.11673Z"
              fill={counter > 0 ? "black" : "#E6E6EB"}
            />
          </svg>
          <svg
            onClick={() => nextSlide()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-Rule="evenodd"
              clip-Rule="evenodd"
              d="M16.1402 8.11673C16.3271 7.96109 16.6302 7.96109 16.8171 8.11673L21.8598 12.3158L21.916 12.3719C22.0467 12.53 22.0246 12.7488 21.8517 12.8861L16.8089 16.8899L16.7413 16.9347C16.5518 17.0386 16.2944 17.0181 16.1322 16.8765L16.0784 16.8202C15.9537 16.6624 15.9783 16.448 16.1483 16.313L20.3211 13H1.97619L1.89059 12.9919C1.66845 12.9496 1.5 12.7455 1.5 12.5C1.5 12.2239 1.7132 12 1.97619 12H20.1277L16.1402 8.68037L16.0848 8.62517C15.9556 8.46984 15.974 8.25508 16.1402 8.11673Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        className="wrapper_carousel flex gap-10 duration-500 transform h-[370px]"
        style={wrapperStyle}
      >
        {newFlowers.slice(10).map((flower, index) => {
          return <Card state={flower} key={index} />;
        })}
      </div>
    </div>
  );
};

export default index;
