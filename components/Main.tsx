import React from "react";
import ShortLinkBox from "./ShortLinkBox";

function Main() {
  return (
    <>
      <div className=' bg-gray-100 px-8 flex gap-6 flex-col  static py-[8rem] -z-50'>
        <ShortIt />
        <ShortLinkBox />
        <ShortLinkBox />
        <ShortLinkBox />
        <Statistics />
      </div>
    </>
  );
}



export function ShortIt() {
  return (
    <>
      <div className=" absolute   top-[48rem]  bg-Violet z-40  rounded-lg flex flex-col gap-4 p-6 overflow-hidden inset-x-0 mx-7">
        {/* <div className=" absolute   -top-[5rem]  bg-Violet -z-40  rounded-lg flex flex-col gap-4 p-6 overflow-hidden inset-x-0 mx-7"> */}
        <img className=" absolute -z-30 right-0 top-0" src="/images/bg-shorten-mobile.svg" alt="" />
        <div>
          <input type="text" className="w-full rounded h-10 px-4 placeholder-red-300  focus:ring-2 focus:ring-red-400 outline-none" placeholder="Shorten a link here..." />
          <p className="text-red-400 italic text-xs mt-2">Please add a link </p>
        </div>
        <button className="text-white bg-Cyan font-semibold text-xl text-center py-2 rounded  " >Shorten It!</button>
      </div>

    </>
  )
}

function Statistics() {
  return (
    <>
      <div className=" text-center">
        <div className="text-2xl font-semibold mb-4 ">Advanced Statistics </div>
        <p className="text-gray-400 font-medium ">Track how your links are performing across the web with our advnaced statics dashboard.</p>
      </div>
    </>
  )
}
export default Main;
