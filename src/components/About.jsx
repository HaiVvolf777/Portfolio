import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <p className="text-4xl font-bold inline ">
          About
        </p>


        <p className="text-xl mt-12">
          Ambitious web developer eager to contribute developed knowledge. Proactive individual with strengths in communication and collaboration. Adaptable and driven with a strong work ethic and
          ability to thrive in team-based or individually motivated settings.
        </p>

        <br />

        <p className="text-xl">
          Experienced working on front-end web development,
          extensively using React, HTML, BootStrap, Tailwind, and its libraries. Also worked in
          blockchain development using hyper-Ledger fabric.
        </p>
      </div>
    </div>
  );
};

export default About;
