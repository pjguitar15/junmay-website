import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Define the type for team member
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ju Ran Teves",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522291/mayjune/team/Juran_jpyoaw.png",
  },
  {
    name: "Soh Xin Ya",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522646/mayjune/team/jongwon_partner_lmxxza.png",
  },
  {
    name: "Sreynav Pol De Guzman",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522367/mayjune/team/jerico_wife_qlnhqf.png",
  },
  {
    name: "Arree Villalobos",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522566/mayjune/team/wife_tpzbgy.png",
  },
  {
    name: "Chia Chwen Yeu",
    role: "Maid of Honor",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522697/mayjune/team/chwen_b3asm7.png",
  },
  {
    name: "Jun Do Teves",
    role: "Best Man",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521813/mayjune/team/jundo_l0mu90.png",
  },
  {
    name: `Reinger "Rinka" Basuil`,
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521713/mayjune/team/Rinka_zgtbaw.png",
  },
  {
    name: "Jericho De Guzman",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521879/mayjune/team/jeric_ji2aes.png",
  },
  {
    name: "Joemar Villalobos",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521944/mayjune/team/asdZ_un8jma.png",
  },
  {
    name: "Jong Won Teves",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522143/mayjune/team/jong_won_xdmhdw.png",
  },
];

const itemsPerPage = 5;

const TeamSection: React.FC = () => {
  // Helper function to group team members into chunks
  const groupMembers = (members: TeamMember[]): TeamMember[][] => {
    const grouped: TeamMember[][] = [];
    for (let i = 0; i < members.length; i += itemsPerPage) {
      grouped.push(members.slice(i, i + itemsPerPage));
    }
    return grouped;
  };

  const memberGroups = groupMembers(teamMembers);

  return (
    <section
      className='py-24'
      id='bridesmaid-&-groomsmen'
    >
      <div className='text-center mb-8'>
        <h2 className='text-5xl font-bold font-alex-brush'>
          Bridesmaids & Groomsmen
        </h2>
        <p className='text-lg text-gray-500 font-lato'>
          Honoring the Special Ones by Your Side
        </p>
      </div>

      <div className='relative container mx-auto px-12'>
        <Slide
          autoplay={true}
          pauseOnHover={true}
          transitionDuration={800}
          duration={3000}
          arrows={true}
          prevArrow={<SlArrowLeft className='w-6 h-6' />}
          nextArrow={<SlArrowRight className='w-6 h-6' />}
        >
          {memberGroups.map((group, index) => (
            <div
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mx-auto'
              key={index}
            >
              {group.map((member, idx) => (
                <div
                  key={idx}
                  className='text-center transform transition duration-300 hover:scale-105'
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-auto rounded-lg mb-4'
                  />
                  <h3 className='text-lg font-semibold font-lora'>
                    {member.name}
                  </h3>
                  <p className='text-gray-500 font-lato'>{member.role}</p>
                </div>
              ))}
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default TeamSection;
