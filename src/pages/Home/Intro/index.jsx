import React from "react";
import Carousel from "./Carousel";

const index = () => {
  return (
    <div>
      <Carousel />
      <div className="wrapper mt-10 flex items-center gap-10">
        <div className="banner1 w-[560px] h-[220px]">
          <div className="pl-20 pt-[46px]">
            <h2 className="font-[MediumR] text-[28px]">Nice little gifts</h2>
            <p className="font-[Medium] text-[18px] mb-[19px]">
              for loved ones
            </p>
            <button className=" text-black flex items-center gap-3 rounded">
              <p className="text-[14px] ">View now</p>
              <a href="#">
                <svg
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
              </a>
            </button>
          </div>
        </div>
        <div className="banner2 w-[560px] h-[220px]">
          <div className="pl-20 pt-[46px]">
            <h2 className="font-[MediumR] text-[28px]">Plants</h2>
            <p className="font-[Medium] text-[18px] mb-[19px]">
              for home comfort
            </p>
            <button className=" text-black flex items-center gap-3 rounded">
              <p className="text-[14px] ">View now</p>
              <a href="#">
                <svg
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
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
