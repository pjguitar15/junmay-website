import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles

const PrenupSlideshow: React.FC = () => {
  // Define your static image URLs here
  const images = [
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697481/mayjune/prenup/DSCF0280_hfohb0.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697477/mayjune/prenup/DSCF0279_hoie7s.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697477/mayjune/prenup/DSCF0277_ndhfcl.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697477/mayjune/prenup/DSCF0276_ax6za1.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697476/mayjune/prenup/DSCF0339_ndolh0.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697472/mayjune/prenup/DSCF0338_y7fycq.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697472/mayjune/prenup/DSCF0337_pjwfk8.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697472/mayjune/prenup/DSCF0334_voaybu.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697471/mayjune/prenup/DSCF0331_zqmfaa.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697472/mayjune/prenup/DSCF0333_vyoxp2.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697471/mayjune/prenup/DSCF0330_zjaaaa.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697472/mayjune/prenup/DSCF0332_ubwlfm.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697471/mayjune/prenup/DSCF0329_pjzs8d.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697471/mayjune/prenup/DSCF0328_j8666w.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697471/mayjune/prenup/DSCF0327_ryurqv.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697461/mayjune/prenup/DSCF0318_lmrdfo.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697462/mayjune/prenup/DSCF0325_sghvpq.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697461/mayjune/prenup/DSCF0317_ijnggu.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697461/mayjune/prenup/DSCF0319_pxgjro.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697461/mayjune/prenup/DSCF0316_waofkz.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697461/mayjune/prenup/DSCF0324_uz381o.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697460/mayjune/prenup/DSCF0315_tesrc3.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697461/mayjune/prenup/DSCF0322_ivfj64.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697460/mayjune/prenup/DSCF0313_obm395.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697460/mayjune/prenup/DSCF0314_l2jhwp.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697459/mayjune/prenup/DSCF0309_uapar7.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697460/mayjune/prenup/DSCF0310_g7tlhx.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697460/mayjune/prenup/DSCF0312_ywk8w2.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697460/mayjune/prenup/DSCF0311_oq5u2l.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697459/mayjune/prenup/DSCF0308_gxefyr.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697459/mayjune/prenup/DSCF0306_ybvqzq.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697459/mayjune/prenup/DSCF0307_wurrel.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697459/mayjune/prenup/DSCF0305_i1anil.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697458/mayjune/prenup/DSCF0304_dc2xn3.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697458/mayjune/prenup/DSCF0303_sd3w2v.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0298_rvnzha.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697458/mayjune/prenup/DSCF0300_jfb3t5.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697458/mayjune/prenup/DSCF0302_lee8aj.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697458/mayjune/prenup/DSCF0299_bc1kqh.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697458/mayjune/prenup/DSCF0301_jicprt.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0293_dobf2s.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0297_q6iuv8.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0295_drekm7.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0296_tlomcl.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0294_n0f8o8.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697457/mayjune/prenup/DSCF0292_lspzfh.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697456/mayjune/prenup/DSCF0291_pveipt.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697456/mayjune/prenup/DSCF0290_rr7bre.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697456/mayjune/prenup/DSCF0289_c12ngm.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697456/mayjune/prenup/DSCF0288_s6m6qd.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697455/mayjune/prenup/DSCF0285_vk1hdx.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697456/mayjune/prenup/DSCF0287_qmxpgw.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697454/mayjune/prenup/DSCF0282_jrs9qb.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697455/mayjune/prenup/DSCF0281_xzjxa7.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697455/mayjune/prenup/DSCF0284_kwwjmc.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697455/mayjune/prenup/DSCF0286_jcolt2.jpg",
    "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,f_auto,w_800/v1723697455/mayjune/prenup/DSCF0283_ggncg3.jpg",
  ];

  return (
    <div className='bg-white py-28'>
      <div className='container mx-auto px-24'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-14'>
          <div
            className='relative overflow-hidden rounded-lg shadow-md'
            style={{ width: "60%", height: "600px" }} // Set fixed height
          >
            <Slide
              autoplay={true}
              pauseOnHover={true}
              transitionDuration={500} // Transition duration in ms
              duration={800} // Duration to display each slide in ms
              arrows={true}
              canSwipe={true}
              infinite={true} // Ensure the slideshow loops
            >
              {images.map((url, index) => (
                <div
                  key={index}
                  className='flex justify-center items-center w-full h-full'
                >
                  <img
                    src={url}
                    alt={`Prenup Image ${index + 1}`}
                    className='w-full h-full object-cover'
                    style={{ width: "100%", height: "100%" }} // Ensure the image fits within the container
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className='mt-8 md:mt-0 md:ml-8 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-alex-brush text-pink-800 mb-6'>
              Prenup Moments
            </h2>
            <p className='text-gray-700 mb-4'>
              Our prenup photos beautifully capture the essence of our love
              story and the journey we've been on together. From candid moments
              to carefully crafted poses, each image tells a unique part of our
              story and our excitement for the future.
            </p>
            <p className='text-gray-700'>
              We hope these images bring a smile to your face and make you feel
              a part of our special day. Thank you for being a cherished part of
              our lives and our celebration!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrenupSlideshow;
