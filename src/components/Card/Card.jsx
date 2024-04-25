import React from "react";
import { data } from "../../data/data";
import { useState } from "react";
const Card = () => {
  // console.log(data);
  const [dept, setDept] = useState(data);
  //filter type by dept
  const filterType = (category) => {
    setDept(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //fliter by price
  const filterPrice = (price) => {
    setDept(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1500px] m-auto px-4 py-12 bg-blue-100 ">
      <h1 className="text-gray-800 font-bold text-4xl text-center underline">
        Department{" "}
      </h1>
      {/*Filter row*/}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/*filter types*/}
        <div>
          <p className="font-bold text-gray-700 uppercase  text-2xl">Filter Type</p>
          <div className="flex justify-between flex-wrap ">
          <button onClick={()=>setDept(data)}className=" m-1 border-yellow-500 text-yellow-500  hover:bg-yellow-500 hover:text-white ">
              All
            </button>
            <button onClick={()=> filterType('Tech')}className=" m-1 border-yellow-500 text-yellow-500  hover:bg-yellow-500 hover:text-white ">
              Tech
            </button>
            <button onClick={()=> filterType('Non Tech')} className=" m-1 border-yellow-500 text-yellow-500  hover:bg-yellow-500 hover:text-white  ">
              Non Tech
            </button>
            <button onClick={()=> filterType('other')} className=" m-1 border-yellow-500 text-yellow-500  hover:bg-yellow-500 hover:text-white ">
              Other
            </button>
          </div>
        </div>
        {/*fliter wise*/}
        {/* <div>
         
          <p className="font-bold text-gray-700">Fliter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
 <button className=" m-1 border-yellow-500 text-yellow-500  hover:bg-yellow-500 hover:text-white ">Click Here</button>
          </div>
        </div>*/}
      </div>
      {/*Display card*/}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4
       ">
        {dept.map((item, index) => (
          <div
            key={index}
            className="border showdow-lg  rounded-lg hover:scale-105 duration-300 bg-yellow-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold ">{item.name}</p>
              <p className="">
                <span className="bg-blue-600 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
