import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ProjectBoxProps {
  title: string;
  year: number;
  img: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  year,
  img,
  description,
  tags,
  link,
}) => {
  return (
    <div className="w-full md:w-5/6 h-auto bg-white m-auto p-4">
      <Link href={link}>
        <div className="bg-black text-white font-tt_travels uppercase text-3xl md:text-5xl p-4 text-center">
          {title}
        </div>
      </Link>
      <div className="flex flex-col items-center xl:flex-row mt-4">
        <div className="w-full xl:w-1/2 relative">
          <Link href={link}>
            <Image
              width={512}
              height={512}
              src={img}
              alt={title}
              className=" w-full h-auto border border-gray-600"
            />
            <Image
              width={512}
              height={512}
              src="/images/svg/topsecret.svg"
              alt="Top Secret"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-96 xl:w-72"
            />
          </Link>
        </div>
        <div className="w-full xl:w-1/2 p-4 md:p-8">
          <p className="font-tt_travels text-base md:text-xl my-1">{year}</p>
          <p className="font-montserrat text-sm md:text-base text-justify my-2 md:my-4">
            {description}
          </p>
          <div className="flex my-4 space-x-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="text-sm md:text-base text-gray-600 px-3 py-1 border border-gray-600 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
