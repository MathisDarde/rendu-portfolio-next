import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center bg-black h-screen flex items-center justify-center">
      <div className="flex flex-col p-8">
        <img
          src="/images/svg/envelope404.svg"
          alt="Envelope Classified"
          className="h-full "
        />
      </div>
      <div className="flex flex-col justify-between p-8 h-2/3">
        <div>
          <h1
            className="text-404 font-tt_travels font-bold text-white leading-none relative w-[max-content]
before:absolute before:inset-0 before:animate-typewriter
before:bg-black
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-white"
          >
            404
          </h1>
          <h3 className="text-2xl font-montserrat font-bold text-white uppercase">
            Page not found
          </h3>
        </div>

        <div>
          <p className="text-white">
            The page you are trying to access is not available or does not exist
            !
          </p>
          <p className="text-white">Retry later or check the URL !</p>
        </div>
        <div>
          <Link href={"/"}>
            <button className=" bg-white text-black py-2 px-6 rounded-full transition-colors hover:bg-black hover:border-2 hover: border-white hover:text-white">
              Return to home to resume your mission
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
