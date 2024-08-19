import { motion } from "framer-motion";
import pinkFlowers from "../assets/pink-flowers.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WeddingVows = () => {
  return (
    <section
      className='bg-[#84547f] py-20 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 2xl:px-52 relative'
      id='wedding-vows'
    >
      <div className='container mx-auto text-justify'>
        {/* Pink flowers image */}
        <motion.img
          src={pinkFlowers}
          alt='Pink Flowers'
          className='w-2/6 md:w-32 lg:w-40 xl:w-48 mx-auto mb-3'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Wedding Vows Title */}
        <motion.h1
          className='text-4xl md:text-5xl font-light text-center text-white mb-12 uppercase tracking-widest font-lato relative'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Our Wedding Vows
        </motion.h1>

        {/* Groom's Vows */}
        <motion.div
          className='p-8 rounded-lg mb-12 font-lora'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className='text-2xl md:text-3xl font-normal text-[#f1b4d0] mb-4'>
            Groom: Jun Young
          </h2>
          <p className='text-white text-lg leading-relaxed mb-6'>
            To my beloved wife-to-be, May Chia, from the moment I met you, I
            knew my life would never be the same, because of how much pettiness
            I have to embrace. You are my best friend, my confidant, and my
            greatest love. Today, I stand before you, surrounded by our loved
            ones, to promise you my heart, my soul, and my unwavering
            commitment.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            I will stand by you in your successes and support you in your
            struggles and procrastinations. I promise to be your rock, offering
            strength and comfort in times of need, and to listen to you with
            patience and love, no matter what.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            I pledge to create a home filled with love, laughter, and
            understanding, where we can grow together, hand in hand, through all
            of life’s adventures. I promise to always share at least a bite of
            my food with you, no matter how delicious it is, and I vow to always
            pour you a drink whenever we have meals together, ensuring you
            always feel cherished and taken care of.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            I will cherish our bond, nurture our relationship, and always strive
            to be the partner you deserve. And yes, dieting and exercising is
            difficult, but I promise to be the better version of myself for us.
            I will help you find joy even in the little things and to laugh with
            you every day.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            Even when we are completely broke, I will stand by your side, cook
            pancit for you, and find happiness in the simple moments we share.
            Together, we can overcome any obstacle and build a life full of love
            and memories.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            As we embark on this journey together, I promise to love you more
            each day, to honor and respect you, and to remain faithful and true
            to you for all the days of my life. You are my everything, and I am
            eternally grateful for the love we share.
          </p>
          <p className='text-white text-lg leading-relaxed'>
            Today, I choose you, May Chia, now and forever, as my wife, my
            partner, and my one true love – and as the only person I want to
            lovingly share my life with.
          </p>
        </motion.div>

        {/* Bride's Vows */}
        <motion.div
          className='p-8 rounded-lg mb-12 font-lora'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className='text-2xl md:text-3xl font-normal text-[#f1b4d0] mb-4'>
            Bride: May
          </h2>
          <p className='text-white text-lg leading-relaxed mb-6'>
            To my beloved husband-to-be, Jun Young Teves, from the moment I met
            you, I knew my life would never be the same, because of how many
            smelly farts I would have to tolerate and embrace. But still, you
            are my best friend, my confidant, and my greatest love. Today, I
            stand before you, surrounded by our loved ones, to promise you my
            heart, my soul, and my unwavering commitment.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            I will cheer you on in your successes and stand by you in your
            struggles. I promise to always be your listening ear, in both good
            times and bad. I vow to be your greatest burden, but also your
            greatest support. I also promise to gently encourage you to improve
            your fashion choices.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            I pledge to create a home filled with love, laughter, and
            understanding, where we can grow together, hand in hand, through all
            of life’s adventures. I will cherish our bond, nurture our
            relationship, and always strive to be the partner you deserve. And
            yes, I promise to always correct your bad spelling.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            Even when we are completely broke, I will stand by your side and eat
            pancit together instead of ordering GrabFood. Together, we can
            overcome any obstacle and find joy in the simple moments we share.
          </p>
          <p className='text-white text-lg leading-relaxed mb-6'>
            As we embark on this journey together, I promise to love you more
            each day, to honor and respect you, and to remain faithful and true
            to you for all the days of my life. You are my everything, and I am
            eternally grateful for the love we share.
          </p>
          <p className='text-white text-lg leading-relaxed'>
            Today, I choose you, Jun Young Teves, now and forever, as my
            husband, my partner, and my one true love – and as the only person I
            want to lovingly annoy for the rest of my life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingVows;
