import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src="/assets/testeVideo.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-white text-3xl md:text-6xl font-bold">Box23Filmes</h1>
      </div>
    </div>
  );
};

export default Banner;
