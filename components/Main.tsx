import React from "react";
import ShortLinkBox from "./ShortLinkBox";

function Main() {
  return (
    <>
      <div className='bg-gray-100 px-8 flex gap-6 flex-col  static pt-[8rem] -z-50 md md:px-20 md:pt-[6rem] md:items-center '>
        <ShortIt />
        <ShortLinkBox />
        <ShortLinkBox />
        <ShortLinkBox />
        <Statistics />
        {/* <div className="relative  md:grid md:grid-cols-3 md:gap-8  bg-blue-300  items-center"> */}
        <div className="relative  md:flex md:gap-8   md:items-stretch md:h-[20rem] md:mb-32  ">
          <div className="bg-Cyan w-2 h-20 absolute  left-1/2 -translate-x-1/2 top-[12rem] md:h-2 md:w-20  md:top-32 md:left-[22rem]" />
          <div className="bg-Cyan w-2 h-20 absolute  left-1/2 -translate-x-1/2 bottom-[20rem] md:h-2 md:w-20  md:top-32 md:left-[42rem] " />
          <Recognition style={''} image={'/images/icon-brand-recognition.svg'} title={'Brand Recognition'} desc={"Boost your brand recognition with each click. Generic links don't mean a thing . Branded links help instil confidence in your content."} />

          <Recognition style={'mt-10'} image={'/images/icon-detailed-records.svg'} title={'Detailed Records'} desc={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} />

          <Recognition style={'mt-20'} image={'/images/icon-fully-customizable.svg'} title={'Fully Customizable'} desc={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} />
        </div>

      </div>
    </>
  );
}
export default Main;



export function ShortIt() {
  return (
    <>
      <div className=" absolute   top-[48rem]  bg-Violet z-40  rounded-lg flex flex-col gap-8 p-6 overflow-hidden inset-x-0 mx-7 md md:mx-20 md:top-[40rem] md:flex-row md:p-12 md:gap-4 ">
        <img className=" absolute -z-30 right-0 top-0 md:hidden" src="/images/bg-shorten-mobile.svg" alt="" />
        <img className=" absolute -z-30 right-0 top-0 hidden md:block" src="/images/bg-shorten-desktop.svg" alt="" />
        <div className="w-full">
          <input type="text" className="relative w-full rounded h-12 px-4 placeholder-red-300  focus:ring-2 focus:ring-red-400 outline-none  md:rounded-lg" placeholder="Shorten a link here..." />
          <p className="absolute text-red-400 italic text-xs mt-2">Please add a link </p>
        </div>
        <button className="text-white bg-Cyan font-semibold text-lg text-center py-2.5 rounded hover:shadow hover:bg-cyan-300 md:px-8 md:rounded-lg     " >Shorten&nbsp;It!</button>
      </div>

    </>
  )
}

function Statistics() {
  return (
    <>
      <div className=" text-center my-16 md:w-[30rem]">
        <div className="text-2xl font-semibold mb-4 ">Advanced Statistics </div>
        <p className="text-gray-400 font-medium ">Track how your links are performing across the web with our advnaced statics dashboard.</p>
      </div>
    </>
  )
}
interface propRecognition {
  image: any,
  title: any,
  desc: any,
  style: any,
}

function Recognition({ image, title, desc, style }: propRecognition) {
  return (
    <>
      <div className={"bg-white p-4 rounded-md text-center pt-20 relative mb-20 md:w-[20rem] md:text-left md:p-8 md:pt-14  md:h-[14rem] " + style}>
        <div className="absolute -top-10   -translate-x-1/2   mx-auto  bg-Violet inline-block p-6 rounded-full md:p-4 md:left-14 ">
          <img src={image} alt="" />
        </div>
        <div className="font-semibold text-xl mb-4 " >{title}</div>
        <div className="text-gray-400 text-sm ">{desc}</div>
      </div>
    </>
  )
}

