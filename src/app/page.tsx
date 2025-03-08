"use client";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Skills from "../../components/Skills";
import Folder from "../../components/Folder";
import DoNotCross from "../../components/DoNotCross";
import ProjectBox from "../../components/ProjectBox";
import SendMail from "../../components/SendMail";
import { Link, Element } from "react-scroll";
import Image from "next/image";

function Main() {
  return (
    <div className="h-full w-screen bg-black p-4 sm:p-8 ">
      <Navbar />

      <div className="w-full flex flex-col xl:flex-row items-center justify-center my-8">
        <div className="flex flex-col items-center xl:items-end w-full xl:w-1/2 justify-center p-2 xl:p-12">
          <div className="flex flex-col items-center xl:items-end my-4">
            <h1 className="text-6xl font-tt_travels sm:text-8xl text-white uppercase">
              Mathis
            </h1>
            <h1 className="text-6xl font-tt_travels sm:text-8xl text-white uppercase">
              Dardé
            </h1>
          </div>
          <h3 className="uppercase text-base sm:text-xl font-tt_travels text-white my-2">
            Frontend Developer
          </h3>
          <p className=" text-center xl:text-end text-white text-sm sm:text-base font-montserrat w-full">
            Welcome in the creative and innovative world of web developing.{" "}
          </p>
          <Link to="contact" smooth={true}>
            <Button text="✉ Contact" className="bg-white text-black" />
          </Link>
        </div>
        <div className="hidden flex-col items-center justify w-1/2 my-4 text-center xl:flex">
          <Image
            width={512}
            height={512}
            src="/images/svg/viseur.svg"
            alt="Viseur"
            className="w-2/3"
          />
        </div>
      </div>

      <Element
        id="aboutme"
        name="aboutme"
        className="relative -top-24 opacity-0 transition-opacity duration-500"
      ></Element>
      <div className="text-center my-8">
        <h2 className="text-4xl text-white font-tt_travels">about me</h2>
        <div className="flex flex-col items-center justify-center lg:flex-row my-4 md:my-0">
          <div className="flex flex-col items-center p-4 md:p-12 w-full md:w-1/2 ">
            <div className="relative">
              <Image
                width={512}
                height={512}
                src="/images/photocvmodif.jpg"
                alt="Picture of me"
                className="h-60 w-60 lg:h-80 lg:w-80"
              />
              <div>
                <Image
                  width={512}
                  height={512}
                  src="/images/svg/scotchhg.svg"
                  alt="Scotch"
                  className="w-12 absolute -top-5 -left-5"
                />
              </div>
              <div>
                <Image
                  width={512}
                  height={512}
                  src="/images/svg/scotchhd.svg"
                  alt="Scotch"
                  className="w-12 absolute -top-5 -right-5"
                />
              </div>
              <div>
                <Image
                  width={512}
                  height={512}
                  src="/images/svg/scotchbg.svg"
                  alt="Scotch"
                  className="w-12 absolute -bottom-5 -left-5"
                />
              </div>
              <div>
                <Image
                  width={512}
                  height={512}
                  src="/images/svg/scotchbd.svg"
                  alt="Scotch"
                  className="w-12 absolute -bottom-5 -right-5"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center justify-center p-6 lg:p-12 w-full sm:w-3/4 lg:w-1/2 ">
            <div className="flex items-center mb-2">
              <span className=" uppercase font-semibold font-montserrat text-white text-base sm:text-lg">
                Name:
              </span>
              <p className="ml-4 text-white text-base sm:text-lg font-montserrat font-light">
                Mathis Dardé
              </p>
            </div>
            <div className="flex items-center mb-2">
              <span className=" uppercase font-semibold font-montserrat text-white text-base sm:text-lg">
                Profession:
              </span>
              <p className="ml-4 text-white text-base sm:text-lg font-montserrat font-light">
                Frontend Developer
              </p>
            </div>
            <div className="flex items-center mb-2">
              <span className=" uppercase font-semibold font-montserrat text-white text-base sm:text-lg">
                Location:
              </span>
              <p className="ml-4 text-white text-base sm:text-lg font-montserrat font-light flex items-center">
                Paris, France
                <Image
                  width={512}
                  height={512}
                  src="/images/drapeaufrance.svg"
                  alt="Drapeau France"
                  className="w-4 ml-4 border border-white"
                />
              </p>
            </div>
            <p className="text-white font-montserrat text-base sm:text-lg text-left my-3 w-full">
              Currently in my second year at IIM Digital School, I&apos;m a
              front-end web developer. I create websites that are both practical
              and functional, with a modern, intuitive design. I&apos;m
              currently looking for a work-study position for the 2025-2026
              academic year.{" "}
            </p>
          </div>
        </div>
      </div>

      <Element
        id="skills"
        name="skills"
        className="relative -top-24 opacity-0 transition-opacity duration-500"
      ></Element>
      <div className="text-center my-8">
        <h2 className="text-5xl text-white font-tt_travels">skills</h2>
        <div>
          <Skills />
        </div>
      </div>

      <Element
        id="projects"
        name="projects"
        className="relative -top-24 opacity-0 transition-opacity duration-500"
      ></Element>
      <div className="text-center my-8">
        <h2 className="text-5xl text-white font-tt_travels">projects</h2>
        <div className="mx-auto my-8 hidden xl:block">
          <Folder />
        </div>
      </div>

      <DoNotCross />

      <div className="my-8">
        <div className="p-0 md:p-6">
          <ProjectBox
            title="AJA Blog Project"
            year={2025}
            img="/images/screenblogaja.png"
            description="Voici le premier gros projet que j'ai mené et réalisé from scratch depuis l'été 2024. J'ai développé un blog sur le club bourguignon de l'AJ Auxerre, mon club de coeur avec des articles réalisés par mes soins."
            tags={["Next", "React", "FullStack"]}
            link="#"
          />
        </div>
        <div className="p-0 mt-2 md:mt-0 md:p-6">
          <ProjectBox
            title="AJA Blog Project"
            year={2025}
            img="/images/screenblogaja.png"
            description="Voici le premier gros projet que j'ai mené et réalisé from scratch depuis l'été 2024. J'ai développé un blog sur le club bourguignon de l'AJ Auxerre, mon club de coeur avec des articles réalisés par mes soins."
            tags={["Next", "React", "FullStack"]}
            link="#"
          />
        </div>
      </div>

      <DoNotCross />

      <Element
        id="contact"
        name="contact"
        className="relative -top-24 opacity-0 transition-opacity duration-500"
      ></Element>
      <div className="text-center my-8">
        <h2 className="text-5xl text-white font-tt_travels">contact</h2>

        <SendMail />
      </div>
    </div>
  );
}

export default Main;
