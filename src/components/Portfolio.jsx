import React from "react";
import html from "../assets/portfolio/HTMLCSS.png";
import peace from "../assets/portfolio/PeacefullUnicorn.png";
import react from "../assets/portfolio/react.png";
import reactApp from "../assets/portfolio/ReactAppTail.png";
import smart from "../assets/portfolio/Smartpolicing.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: html,
    },
    {
      id: 2,
      src: peace,
    },
    {
      id: 3,
      src: react,
    },
    {
      id: 4,
      src: reactApp,
    },
    {
      id: 5,
      src: smart,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-24 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">
            Portfolio
          </p>
          <p className="py-6 font-bold">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center ">
                <a href="https://github.com/HaiVvolf777" target='_blank'  rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
