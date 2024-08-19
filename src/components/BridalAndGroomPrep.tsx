import React from "react";
import { Link } from "react-router-dom";
import { baseUrl, COMP } from "../images/ImageUrls";

const BridalAndGroomPrep: React.FC = () => {
  return (
    <section className='bg-gray-50 py-16 md:py-24'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-alex-brush text-pink-800 mb-4'>
          Preparations
        </h2>
        <p className='text-lg text-gray-700 mb-8'>
          A glimpse into the moments before the "I do."
        </p>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Bridal Prep */}
          <div className='relative w-full md:w-1/2 group'>
            <Link to='/gallery/bridal-preparation'>
              <img
                src={`${
                  baseUrl + COMP
                }/v1724070637/mayjune/bride%20prep/MRV09287_p2ynk3.jpg`}
                alt='Bridal Prep'
                className='w-full h-60 md:h-72 object-cover object-top rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75 cursor-pointer'
              />
              <div className='absolute inset-0 bg-black opacity-50 rounded-lg transition duration-300 ease-in-out group-hover:opacity-75'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <h3 className='text-white text-2xl font-semibold'>
                  Bridal Prep
                </h3>
              </div>
            </Link>
          </div>
          {/* Groom Prep */}
          <div className='relative w-full md:w-1/2 group'>
            <Link to='/gallery/groom-preparation'>
              <img
                src={`${
                  baseUrl + COMP
                }/v1724071807/mayjune/groom%20prep/MRV09733_jwcawu.jpg`}
                alt='Groom Prep'
                className='w-full h-60 md:h-72 object-cover object-top rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75 cursor-pointer'
              />
              <div className='absolute inset-0 bg-black opacity-50 rounded-lg transition duration-300 ease-in-out group-hover:opacity-75'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <h3 className='text-white text-2xl font-semibold'>
                  Groom Prep
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Group Prep */}
        <div className='flex flex-col md:flex-row gap-8 mt-12'>
          <div className='relative w-full group'>
            <Link to='/gallery/pre-wedding-moments'>
              <img
                src={`${
                  baseUrl + COMP
                }/v1724076656/mayjune/pre-wedding%20moments/_ACP5943_tqf9jw.jpg`}
                alt='Group Prep'
                className='w-full h-60 md:h-72 object-cover object-center rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75 cursor-pointer'
              />
              <div className='absolute inset-0 bg-black opacity-50 rounded-lg transition duration-300 ease-in-out group-hover:opacity-75'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <h3 className='text-white text-2xl font-semibold'>
                  Pre-Wedding Moments
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridalAndGroomPrep;
