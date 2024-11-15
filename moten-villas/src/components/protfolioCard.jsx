import React from "react";
import Services from "../components/services";

const AboutCard = () => {
  return (
    <div className="overflow-hidden mt-24 ">
      <div className=" flex flex-col lg:flex-row-reverse  items-center justify-center gap-8 mr-4 ml-4">
        
        {/* YouTube Video Embed */}
        <div className="relative w-full lg:w-1/2 overflow-hidden ">
  {/* Aspect ratio wrapper for small screens */}
    <div className="block lg:hidden w-full h-0" style={{ paddingBottom: "56.25%" }}>
    <iframe
      src="https://www.youtube.com/embed/bSYkAw3bN2c?si=jE4Ryu0AdKw30m4K"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full rounded-md overflow-hidden"
    ></iframe>z
  </div>

  {/* Original iframe styling for large screens */}
  <div className=" hidden lg:block relative ">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/bSYkAw3bN2c?si=jE4Ryu0AdKw30m4K"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-md overflow-hidden"
    
    ></iframe>
  </div>
</div>



        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight mr-4 ml-4">
            Amazing Work of Moten Villas
          </h2>
          <div className="space-y-4 text-gray-600 flex-col mr-4 ml-4">
            <p className="text-justify">
              Moten Villas stands as a testament to outstanding architectural design and meticulous craftsmanship. Each villa embodies a perfect balance of luxury and comfort, crafted to elevate living standards. With a commitment to quality, innovation, and customer satisfaction, Moten Villas has established itself as a premier name in the industry, delivering an unparalleled living experience.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutCard;
