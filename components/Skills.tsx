import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="text-center grid grid-cols-2 place-items-center mx-auto w-[250px] sm:w-[400px] lg:w-auto lg:flex lg:items-center lg:justify-center gap-4 mt-8 mb-24">
      <div className="group relative bg-white w-28 h-28 p-2 lg:w-40 lg:h-40 lg:p-4 rounded-xl grayscale-[100%] flex items-center justify-center transition-all hover:grayscale-0">
        <Image
          width={512}
          height={512}
          src="/images/svg/logos/logohtml.svg"
          alt="Logo HTML"
          className="object-contain h-auto w-20 lg:w-32 "
        />
        <h3 className="hidden lg:block opacity-0 text-black bg-white py-2 px-4 rounded-full font-montserrat font-bold absolute top-44 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">
          HTML
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
        </h3>
      </div>
      <div className="group bg-white w-28 h-28 p-2 lg:w-40 lg:h-40 lg:p-4 rounded-xl grayscale-[100%] flex items-center justify-center transition-all hover:grayscale-0">
        <Image
          width={512}
          height={512}
          src="/images/svg/logos/logocss.svg"
          alt="Logo CSS"
          className="object-contain w-auto h-20 lg:h-32"
        />
        <h3 className=" hidden lg:block opacity-0 text-black bg-white py-2 px-4 rounded-full font-montserrat font-bold absolute top-44 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">
          CSS
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
        </h3>
      </div>
      <div className="group bg-white w-28 h-28 p-2 lg:w-40 lg:h-40 lg:p-4 rounded-xl grayscale-[100%] flex items-center justify-center transition-all hover:grayscale-0">
        <Image
          width={512}
          height={512}
          src="/images/svg/logos/logojavascript.svg"
          alt="Logo Javascript"
          className="object-contain h-auto w-20 lg:w-32"
        />
        <h3 className=" hidden lg:block opacity-0 text-black bg-white py-2 px-4 rounded-full font-montserrat font-bold absolute top-44 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">
          JavaScript
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
        </h3>
      </div>
      <div className="group bg-white w-28 h-28 p-2 lg:w-40 lg:h-40 lg:p-4 rounded-xl grayscale-[100%] flex items-center justify-center transition-all hover:grayscale-0">
        <Image
          width={512}
          height={512}
          src="/images/svg/logos/logoreact.svg"
          alt="Logo React"
          className="object-contain h-auto w-20 lg:w-32"
        />
        <h3 className="hidden lg:block opacity-0 text-black bg-white py-2 px-4 rounded-full font-montserrat font-bold absolute top-44 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">
          React
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
        </h3>
      </div>
      <div className="group bg-white w-28 h-28 p-2 lg:w-40 lg:h-40 lg:p-4 rounded-xl grayscale-[100%] flex items-center justify-center transition-all hover:grayscale-0">
        <Image
          width={512}
          height={512}
          src="/images/svg/logos/logonextjs.svg"
          alt="Logo NextJS"
          className="object-contain h-auto w-20 lg:w-32"
        />
        <h3 className="hidden lg:block opacity-0 text-black bg-white py-2 px-4 rounded-full font-montserrat font-bold absolute top-44 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">
          NextJS
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
          <span className="drop hidden lg:block"></span>
        </h3>
      </div>
    </div>
  );
}

export default Skills;
