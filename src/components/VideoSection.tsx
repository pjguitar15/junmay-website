import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section
      className='bg-gray-900 p-8 flex flex-col items-center'
      id='video-section'
    >
      <div className='text-center mb-8'>
        <h2 className='text-white text-4xl md:text-5xl font-bold font-alex-brush'>
          Our Special Day
        </h2>
        <p className='text-pink-600 text-lg md:text-xl font-lato mt-2'>
          Join us in celebrating love and unity
        </p>
        <hr className='border-pink-300 border-t-2 w-3/5 mx-auto mt-4' />
      </div>

      <div className='flex flex-col md:flex-row gap-4 max-w-6xl w-full'>
        {/* First Video */}
        <div
          className='relative w-full'
          style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}
        >
          <iframe
            src='https://player.vimeo.com/video/998954285?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&muted=1&loop=1'
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
            allowFullScreen
            className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
            title='Jun young May STD'
          ></iframe>
        </div>
      </div>

      <section className='bg-gray-800 p-8 w-full mt-12'>
        <div className='flex flex-col container mx-auto'>
          {/* Text Above Video */}
          <div className='relative w-full flex flex-col justify-center items-center p-4 text-center'>
            <h3 className='text-white text-3xl md:text-4xl font-bold mb-2 font-alex-brush'>
              Same Day Edit
            </h3>
            <p className='text-white text-lg md:text-sm '>
              A beautiful capture of our wedding day, edited on the same day.
            </p>
          </div>

          {/* Second Video */}
          <div
            className='relative w-full mx-auto'
            style={{ paddingBottom: "50%", position: "relative" }}
          >
            <iframe
              src='https://player.vimeo.com/video/1000218720?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
              allowFullScreen
              className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VideoSection;
