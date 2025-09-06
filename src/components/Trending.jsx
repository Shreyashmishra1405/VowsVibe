const Trending = () => {
  return (
    <div className="flex flex-col gap-4  justify-center items-center my-6 px-4 md:px-20 ">
      <h1 className="text-2xl text-[#2D2D2D]">You Might also like</h1>
      <div
        className="grid grid-cols-2 items-center gap-6 
        md:flex md:justify-between w-full
      "
      >
        <span className="hidden md:block bg-[#FAF9F6] px-2 rounded-full cursor-pointer">
          {`<`}
        </span>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="relative w-[180px]  h-[200px]  text-[#2D2D2D]">
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="black"
                  height="1.5em"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
              </div>
              <div className="absolute top-4 left-0 px-4 text-sm bg-[#A40303] text-white rounded-r-2xl">
                BestSeller
              </div>
            </div>
            <div>
              <span className="text-sm">Rose Gold Earrings with alloy</span>
              <div className="flex flex-row gap-2 items-center font-medium">
                <span className="text-sm font-semibold">₹1999</span>
                <span className="line-through text-xs">₹2999</span>
              </div>
            </div>
            <button className="py-2 px-8 bg-[#CA8787] text-white cursor-pointer w-full">
              Move to Bag
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="relative w-[187px]  h-[200px]  text-[#2D2D2D]">
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="black"
                  height="1.5em"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
              </div>
              <div className="absolute top-4 left-0 px-4 text-sm bg-[#A40303] text-white rounded-r-2xl">
                BestSeller
              </div>
            </div>
            <div>
              <span className="text-sm">Rose Gold Earrings with alloy</span>
              <div className="flex flex-row gap-2 items-center font-medium">
                <span className="text-sm font-semibold">₹1999</span>
                <span className="line-through text-xs">₹2999</span>
              </div>
            </div>
            <button className="py-2 px-8 bg-[#CA8787] text-white cursor-pointer w-full">
              Move to Bag
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="relative w-[187px]  h-[200px]  text-[#2D2D2D]">
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="black"
                  height="1.5em"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
              </div>
              <div className="absolute top-4 left-0 px-4 text-sm bg-[#A40303] text-white rounded-r-2xl">
                BestSeller
              </div>
            </div>
            <div>
              <span className="text-sm">Rose Gold Earrings with alloy</span>
              <div className="flex flex-row gap-2 items-center font-medium">
                <span className="text-sm font-semibold">₹1999</span>
                <span className="line-through text-xs">₹2999</span>
              </div>
            </div>
            <button className="py-2 px-8 bg-[#CA8787] text-white cursor-pointer w-full">
              Move to Bag
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="relative w-[187px]  h-[200px]  text-[#2D2D2D]">
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="black"
                  height="1.5em"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
              </div>
              <div className="absolute top-4 left-0 px-4 text-sm bg-[#A40303] text-white rounded-r-2xl">
                BestSeller
              </div>
            </div>
            <div>
              <span className="text-sm">Rose Gold Earrings with alloy</span>
              <div className="flex flex-row gap-2 items-center font-medium">
                <span className="text-sm font-semibold">₹1999</span>
                <span className="line-through text-xs">₹2999</span>
              </div>
            </div>
            <button className="py-2 px-8 bg-[#CA8787] text-white cursor-pointer w-full">
              Move to Bag
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="relative w-[187px]  h-[200px]  text-[#2D2D2D]">
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="black"
                  height="1.5em"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
              </div>
              <div className="absolute top-4 left-0 px-4 text-sm bg-[#A40303] text-white rounded-r-2xl">
                BestSeller
              </div>
            </div>
            <div>
              <span className="text-sm">Rose Gold Earrings with alloy</span>
              <div className="flex flex-row gap-2 items-center font-medium">
                <span className="text-sm font-semibold">₹1999</span>
                <span className="line-through text-xs">₹2999</span>
              </div>
            </div>
            <button className="py-2 px-8 bg-[#CA8787] text-white cursor-pointer w-full">
              Move to Bag
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="relative w-[187px]  h-[200px]  text-[#2D2D2D]">
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="black"
                  height="1.5em"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
              </div>
              <div className="absolute top-4 left-0 px-4 text-sm bg-[#A40303] text-white rounded-r-2xl">
                BestSeller
              </div>
            </div>
            <div>
              <span className="text-sm">Rose Gold Earrings with alloy</span>
              <div className="flex flex-row gap-2 items-center font-medium">
                <span className="text-sm font-semibold">₹1999</span>
                <span className="line-through text-xs">₹2999</span>
              </div>
            </div>
            <button className="py-2 px-8 bg-[#CA8787] text-white cursor-pointer w-full">
              Move to Bag
            </button>
          </div>
        </div>
        <span className="hidden md:block bg-[#FAF9F6] px-2 rounded-full cursor-pointer">
          {`>`}
        </span>
      </div>
    </div>
  );
};

export default Trending;
