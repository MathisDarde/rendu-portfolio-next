"use client";

import React, { useEffect } from "react";
import Image from "next/image";

function Folder() {
  useEffect(() => {
    const pages = document.getElementsByClassName(
      "page"
    ) as HTMLCollectionOf<HTMLElement>;

    // Assignation du z-index pour les pages
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      page.style.zIndex = `${pages.length - i}`;
      page.dataset.pageNum = `${i + 1}`;
    }

    function handlePageClick(e: Event) {
      const page = e.currentTarget as HTMLElement;

      // Si la page est déjà retournée, annule l'effet
      if (page.classList.contains("flipped")) {
        page.classList.remove("flipped");
        page.previousElementSibling?.classList.remove("flipped");
      } else {
        page.classList.add("flipped");
        page.nextElementSibling?.classList.add("flipped");
      }

      // Synchronisation du z-index après chaque flip
      Array.from(pages).forEach((pg, index) => {
        pg.style.zIndex = pg.classList.contains("flipped")
          ? `${index}`
          : `${pages.length - index}`;
      });
    }

    // Attache l'événement click à toutes les pages (y compris la dernière)
    for (let i = 0; i < pages.length; i++) {
      pages[i].addEventListener("click", handlePageClick);
    }

    return () => {
      // Cleanup event listeners
      for (let i = 0; i < pages.length; i++) {
        pages[i].removeEventListener("click", handlePageClick);
      }
    };
  }, []);

  return (
    <div className="book">
      <div
        id="pages"
        className="pages mx-auto w-full flex justify-center items-center"
      >
        <div className="page">
          <Image src="/images/svg/dossierconfidential.svg" alt="Folder" />
        </div>
        <div className="page">
          <Image
            src="/images/svg/dossier.svg"
            alt="Folder"
            className="relative"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-[90%] w-[90%] mx-auto p-4">
            <div className="flex items-center justify-center">
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex items-center justify-center">
                  <p className="uppercase font-montserrat text-xs">
                    Government of
                  </p>
                  <Image
                    src="/images/blackpaint.png"
                    alt=""
                    className="w-[72px] h-10 mx-1"
                  />
                </div>
                <div className="text-left">
                  <p className="uppercase font-montserrat font-light text-text-xxs">
                    Paris, France
                  </p>
                  <p className="uppercase font-montserrat font-light text-text-xxs">
                    48.89358500969422, 2.22689628583659
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end w-1/2">
                <Image
                  src="/images/neuillystamp.png"
                  alt="Stamp"
                  className="h-24"
                />
              </div>
              <Image
                src="/images/svg/topsecret.svg"
                alt="Top Secret"
                className="absolute left-32 top-6 w-52"
              />
            </div>

            <div className="border border-black w-auto h-[150px] mt-4">
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Name :</span> AJ Auxerre Blog
                </p>
              </div>
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Year :</span> 2024-2025
                </p>
              </div>
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Language :</span> French{" "}
                  <span></span>
                </p>
              </div>
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Status :</span> Under
                  Development
                </p>
              </div>
            </div>
            <h4 className="font-montserrat font-bold mt-4 mb-1 uppercase">
              Site Preview
            </h4>
            <Image
              src="/images/screenblogaja.png"
              alt=""
              className="w-full h-auto grayscale border border-black "
            />
          </div>
        </div>

        <div className="page">
          <Image
            src="/images/svg/dossier.svg"
            alt="Folder"
            className="relative"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-[90%] w-[90%] mx-auto p-4">
            <div className="flex items-center justify-center">
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex items-center justify-center">
                  <p className="uppercase font-montserrat text-xs">
                    Government of
                  </p>
                  <Image
                    src="/images/blackpaint.png"
                    alt=""
                    className="w-[72px] h-10 mx-1"
                  />
                </div>
                <div className="text-left">
                  <p className="uppercase font-montserrat font-light text-text-xxs">
                    Paris, France
                  </p>
                  <p className="uppercase font-montserrat font-light text-text-xxs">
                    48.89358500969422, 2.22689628583659
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end w-1/2">
                <Image
                  src="/images/neuillystamp.png"
                  alt="Stamp"
                  className="h-24"
                />
              </div>
              <Image
                src="/images/svg/topsecret.svg"
                alt="Top Secret"
                className="absolute left-32 top-6 w-52"
              />
            </div>

            <div className="border border-black w-auto h-[150px] mt-4">
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Name :</span> AJ Auxerre Blog
                </p>
              </div>
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Year :</span> 2024-2025
                </p>
              </div>
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Language :</span> French{" "}
                  <span></span>
                </p>
              </div>
              <div className="border-b border-black m-2">
                <p className="text-text-xxs text-left font-montserrat">
                  <span className="font-bold mx-2">Status :</span> Under
                  Development
                </p>
              </div>
            </div>
            <h4 className="font-montserrat font-bold mt-4 mb-1 uppercase">
              Site Preview
            </h4>
            <Image
              src="/images/screenblogaja.png"
              alt=""
              className="w-full h-auto grayscale border border-black "
            />
          </div>
        </div>
        <div className="page">
          <Image
            src="/images/svg/dossier.svg"
            alt="Folder"
            className="relative"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black h-[200px] w-[300px] mx-auto p-2">
            <div className="flex flex-col items-center justify-between border border-black h-full w-full py-5 px-2">
              <h3 className="font-montserrat">
                The informations you just saw are strictly private and
                confidential.
              </h3>
              <p className="font-montserrat font-extrabold uppercase">
                Don&apos;t tell anyone !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
