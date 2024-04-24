import React from 'react';
 import about from "../../assets/About us1.png"
  import book from "../../assets/books.png"
  import exchange from "../../assets/exchange.png"
import donate from "../../assets/donate.png"
const HeadlineCards = () => {
  return (
    <div className='max-w-[1500px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/*card1*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}

         <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
 <p className='font-bold text-2xl px-2 pt-4'>want to exchange books</p>
 <p className='px-2 '>want to know what the process?</p>
 <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-yellow-400 font-semibold uppercase'> click Here</button>
         </div>
          <img 
           className="max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl"
           src=
           {exchange} alt="" />
      </div>
      {/*card2*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}

         <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
 <p className='font-bold text-2xl px-2 pt-4'>want to Donated books</p>
 <p className='px-2 '>but How?</p>
 <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-yellow-400 font-semibold uppercase'> click Here</button>
         </div>
          <img 
           className="max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl"
           src={donate} alt="" />
      </div>
      {/*card3*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}

         <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
 <p className='font-bold text-2xl px-2 pt-4'>want to  know about us </p>
 <p className='px-2 '> more and explore here</p>
 <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-yellow-400 font-semibold uppercase'> click Here</button>
         </div>
          <img 
           className="max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl"
           src={about} alt="" />
</div>
    </div>
  );
}

export default HeadlineCards;

