 import React from 'react';

 const Exchange = () => {
   return (
     <div  className="max-w-[1500px] m-auto px-4 py-12 ">
         <h1 className="text-black font-bold text-4xl text-center underline mb-10">
        Exchange Your Books {" "}
      </h1>
       {/*display card*/}
        <div className="grid grid-cols-1  lg:grid-cols-2 
         gap-6 pt-4 
         
          align-center w-full h-[800px]
          ">
        <div className='rounded-xl relative '>
        {/*overlay*/}

         <div className='absolute w-[480px] h-[550px] bg-slate-400 rounded-xl ml-[120px] text-black place-items-center mt-14'>
 <p className='font-bold text-2xl px-2 pt-4  text-center'>Give books</p>
 <p className='px-2 ml-2 justify-center'>Add the books you are giving in exchange here</p>
 <div  className='
 grid grid-cols-1 gap-4 items-center p-4 
 '><input type="text" 
 className="rounded-md border border-transparent bg-gray-200 p-2 text-center"
 placeholder="Enter your Name"/>
  
 <input type="text" 
  className="rounded-md border bg-gray-200 p-2 text-center"
 placeholder="Enter your college "/>
 
 <input type="text" 

className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter your Department"/>
 
 <input type="text" 
  className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter your  year"/>
 
 <input type="text" 
  className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter your contact Number"/>
 
  <input type="text" 
   className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter the  name book1 "/>
 
   <input type="text" 
    className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter the  name book2 "/>
 <button className='border-white bg-white text-black mx-auto mt-auto uppercase m-1   hover:bg-blue-600 hover:text-white'> Submit</button>

 </div>

 </div>
 </div> 
{/*take book*/}

<div className='rounded-xl relative  '>
        {/*overlay*/}

         <div className='absolute w-[480px] h-[550px] bg-slate-400 rounded-xl mt-14 text-black  '>
 <p className='font-bold text-2xl px-2 pt-4  text-center'>Take books</p>
 <p className='px-2 ml-2 justify-center'>Add the books you are taking in exchange here</p>
 <div  className='
 grid grid-cols-1 gap-4 items-center p-4 
 '><input type="text" 
 className="rounded-md border border-transparent bg-gray-200 p-2 text-center"
 placeholder="Enter your Name"/>
  
 <input type="text" 
  className="rounded-md border bg-gray-200 p-2 text-center"
 placeholder="Enter your college "/>
 
 <input type="text" 

className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter your Department"/>
 
 <input type="text" 
  className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter your  year"/>
 
 <input type="text" 
  className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter your contact Number"/>
 
  <input type="text" 
   className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter the  name book1 "/>
 
   <input type="text" 
    className="rounded-md border-none bg-gray-200 p-2 text-center"
 placeholder="Enter the  name book2 "/>

<button className='border-white bg-white text-black mx-auto mt-auto uppercase  m-1   hover:bg-blue-600 hover:text-white'>  Send Request</button>
 </div>

 </div>
 </div>


























  </div>
        </div>
   );
 }
 
 export default Exchange;
 