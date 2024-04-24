import React from 'react';
import bg from "../../assets/bg1.png"
const Hero = () => {
  return (
    <div className='max-w-[1500px] mx-auto p-4 '>
      <div className='max-h-[500px] relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full text-black max-h-[500px] flex flex-col justify-center items-center'>
         <h1 className='px-4 text-4xl sm:text md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-400'>Exchange</span> </h1>
         <h1 className='px-4 text-4xl sm:text md:text-6xl lg:text-7xl font-bold'><span className='text-yellow-400'> Donation</span> of Books</h1>
         <button  className="bg-yellow-400 text-black  md:flex items-center py-2 px-8 mt-6 border-none font-bold font-2xl">Explore</button>
      </div>
       <img className='w-full max-h-[900px] object-cover' src=
       /* "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" =====https://img.freepik.com/free-photo/organized-pile-hardcover-books-labelfree-wooden-table-with-blue-background-educational-themes_91128-3433.jpg?t=st=1706812286~exp=1706815886~hmac=4673475229830a8d635d69b2c908b68a4db74c25406626891c6083a6c1dde8ac&w=1380*/ {bg}alt="/" />
    </div>

    </div>
  );
}

export default Hero;
