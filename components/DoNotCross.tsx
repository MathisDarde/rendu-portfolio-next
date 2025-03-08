import React from "react";

function DoNotCross() {
  return (
    <div className="flex w-full overflow-hidden bg-yellow-300 text-black mb-4 py-2 md:py-4">
      <div className="min-w-full flex-none flex justify-around animate-loop-scroll">
        <p className="uppercase text-xl sm:text-4xl md:text-6xl font-bold font-helveticacompressed px-4">
          Crime Scene Do not cross
        </p>
        <p className="uppercase text-xl sm:text-4xl md:text-6xl font-bold font-helveticacompressed px-4">
          Crime Scene Do not cross
        </p>
      </div>
      <div className="min-w-full flex-none flex justify-around animate-loop-scroll">
        <p className="uppercase text-xl sm:text-4xl md:text-6xl font-bold font-helveticacompressed px-4">
          Crime Scene Do not cross
        </p>
        <p className="uppercase text-xl sm:text-4xl md:text-6xl font-bold font-helveticacompressed px-4">
          Crime Scene Do not cross
        </p>
      </div>
    </div>
  );
}

export default DoNotCross;
