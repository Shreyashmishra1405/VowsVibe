import { useState } from "react";
import SideBar from "./SideBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col md:hidden text-black w-full ">
        <div className="bg-[#CA8787] w-full flex  justify-center text-white p-2 text-sm">
          50% off on all items till 23 Jan
        </div>
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row gap-4 py-2 px-6 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="black"
              height="1.5em"
              onClick={() => setOpen(!open)}
            >
              <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
            <span className="font-bold text-xl">LOGO</span>
          </div>
          <div className="flex flex-row gap-4 py-2 px-6 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="black"
              height="1.5em"
            >
              <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="black"
              height="1.5em"
            >
              <path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z" />
            </svg>
          </div>
        </div>
      </div>
      {open && (
        <div  onClick={()=>setOpen(false)} >
          <SideBar />
        </div>
      )}
      <div className="hidden md:flex flex-col w-full">
        <div className="bg-[#CA8787] w-full flex  justify-center text-white p-4 text-sm">
          50% off on all items Only Limited Time Deal Offer ending in 03:34:15
        </div>
        <div className="flex w-full flex-row justify-between bg-[#FAF9F6] px-20 items-center text-sm text-neutral-400 py-4">
          <span className="font-bold text-2xl text-black">LOGO</span>
          <div className="flex justify-center gap-8 ">
            <div className="flex items-center gap-1">
              <span>Collections</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                height="1em"
                fill="gray"
              >
                <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <span>Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                height="1em"
                fill="gray"
              >
                <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
              </svg>
            </div>
            <div className="flex items-center">
              <span>Hot Picks</span>
            </div>
            <div className="flex items-center">
              <span>Gifts</span>
            </div>
            <div className="flex items-center">
              <span>Shop All</span>
            </div>
          </div>
          <div className="flex gap-4 font-semibold text-sm">
            <button className="py-2 px-8 bg-[#FF8F9D] text-white cursor-pointer">
              LOGIN
            </button>
            <button className="py-2 px-8 bg-white text-[#FF8F9D] cursor-pointer border border-[#FF8F9D]">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
