import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className='bg-gray-900 p-8 flex flex-col items-center' id="video-section">
      <div className='text-center'>
        <h2 className='text-white text-4xl md:text-5xl font-bold font-alex-brush'>
          Our Special Day
        </h2>
        <p className='text-pink-600 text-lg md:text-xl font-lato mt-2'>
          Join us in celebrating love and unity
        </p>
        <hr className='border-pink-300 border-t-2 w-3/5 mx-auto mt-4' />
      </div>
      <div className='relative w-full max-w-4xl'>
        <div
          className='w-full'
          style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}
        >
          <iframe
            src='https://player.vimeo.com/video/998954285?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&muted=1'
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
            allowFullScreen
            className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
            title='Jun young May STD'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
