import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className='relative overflow-hidden bg-gray-900'>
      <video
        className='w-full h-auto object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src='/path/to/your/video.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-black opacity-30' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-white text-3xl md:text-4xl font-semibold text-center'>
          Welcome to Our Wedding
        </h2>
      </div>
    </section>
  );
};

export default VideoSection;
