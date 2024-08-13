const AboutUs = () => {
  return (
    <div
      className='bg-white p-8'
      id='about'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 p-12'>
            <img
              src='https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723526687/mayjune/prenup/jun_may_hug_yoewxo.png'
              alt='Couple Image 1'
              className='w-full rounded-lg shadow-lg'
            />
          </div>
          <div className='md:w-1/2 p-12 text-center md:text-left'>
            <h2 className='text-5xl font-bold text-gray-800 font-alex-brush'>
              Celebrate the union of Jun and May Teves
            </h2>
            <p className='text-pink-600 text-lg font-lato mt-1'>
              Where Two Cultures Become One, in Love and Harmony
            </p>
            <hr className='border-pink-300 border-t-1 w-3/5 mt-3' />
            <p className='text-gray-600 mt-4 font-lato'>
              Married on June 15, 2024, their journey together is captured in
              these cherished moments. From the intimate ceremonies to the grand
              celebrations, this website showcases the elegance, precision, and
              joy of their special day, whether it was on a beach, in a city, or
              a luxurious destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
