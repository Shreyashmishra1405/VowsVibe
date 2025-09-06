const Product = () => {
  return (
    <>
      <div className="flex  flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-2 text-sm mt-4 px-14 text-neutral-400  ">
            <span className="hidden md:flex items-center">
              {
                "Home  >  Jewellery > Gits > Necklace > Chains > Shining Diva... >"
              }
            </span>
          </div>
          <div className="md:hidden mt-2 flex items-center gap-2 text-md font-semibold text-neutral-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              height={"1em"}
              fill="#404040"
            >
              <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
            </svg>
            <span>Product details</span>
          </div>
          <div className="flex flex-col md:flex-row mt-2 text-md  gap-2 w-full">
            <div className="left md:px-16 w-full md:w-1/2">
              <img
                src="https://palmonas.com/cdn/shop/files/PM-NECKLACE-168_1.jpg?v=1744528489&width=900"
                alt=""
              />
            </div>
            <div className="right md:w-1/2 flex md:px-20 md:py-2 flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <span className="">Gold-Plated Pearls Necklace</span>
                <span className="text-[#878B94]">Made with 925 Silver</span>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center justify-center gap-1 bg-[#388E3C] text-white px-[5px] py-[3px] text-sm">
                    <span>4.1</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      height={"1em"}
                      fill="white"
                    >
                      <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                    </svg>
                  </div>
                  <span className="text-sm">{`(23)`}</span>
                </div>
                <div className="flex gap-[18px] items-center">
                  <span className="text-xl font-semibold">₹ 1,600</span>
                  <span className="line-through text-neutral-400">₹ 2,000</span>
                  <span className="text-[#388E3C] font-semibold">
                    {`(20% off)`}
                  </span>
                </div>
                <div className="flex flex-row gap-2 font-semibold justify-between">
                  <button className="py-2 px-8 bg-white text-[#FF8F9D] cursor-pointer border border-[#FF8F9D] w-1/2">
                    ADD TO CART
                  </button>
                  <button className="py-2 px-8 bg-[#FF8F9D] text-white cursor-pointer w-1/2">
                    BUY NOW
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-2 ">
                <div className="flex flex-row gap-2 items-center">
                  <img src="/icon1.png" alt="" />
                  <span>Easy 30 Day Return</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src="/icon2.png" alt="" />
                  <span>925 Silver Plating</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src="public/icon3.png" alt="" />
                  <span>6- Month Warranty</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src="/icon4.png" alt="" />
                  <span>Premium Gold</span>
                </div>
              </div>
              <div className="flex justify-between mr-4 text-lg  ">
                <div className="flex gap-4 items-center flex-row">
                  <span className="font-semibold ">Offers</span>
                  <span className="text-neutral-400 text-sm">2 available</span>
                </div>
                <span className="text-[#FF8F9D] cursor-pointer">Check</span>
              </div>
              <div className="text-neutral-500 text-sm italic">
                Coupon can be applied at checkout
              </div>
              <div className="flex w-full flex-col gap-2 text-lg">
                <span>Estimated Delivery Time</span>
                <div className="border flex justify-between items-center px-2">
                  <input
                    type="text"
                    className="p-2 w-3/4 outline-0"
                    placeholder="Enter Pincode"
                  />
                  <span className="text-[#FF8F9D] cursor-pointer  justify-self-end">
                    Check
                  </span>
                </div>
              </div>
              <hr className="border-[#FF8F9D] border-1" />
              <div className="flex flex-col gap-4 ">
                <span className="text-lg font-semibold">
                  Product Decsription
                </span>
                <div className="flex flex-col gap-2 text-sm font-medium ">
                  <div className="flex flex-row gap-2 items-center">
                    <img src="/received.png" alt="" className="w-4 h-4" />
                    <span>
                      Material:
                      <span className="text-neutral-400">
                        925 Sterling Silver
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src="/received.png" alt="" className="w-4 h-4" />
                    <span>
                      Plating:
                      <span className="text-neutral-400">18K Gold</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src="/received.png" alt="" className="w-4 h-4" />
                    <span>
                      Weight:
                      <span className="text-neutral-400">10grams</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src="/received.png" alt="" className="w-4 h-4" />
                    <span>
                      Stone Type:
                      <span className="text-neutral-400">Premium Jerkin</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">Shipping</span>
                  <span className="text-md text-neutral-400">
                    Get it by 25 sep
                  </span>
                </div>
              </div>
              {/* ratings */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex flex-col gap-2">
                  <hr className="border-[#FF8F9D] border-1" />
                  <div className="text-lg font-semibold">Customer Ratings</div>
                  <hr className="border-[#FF8F9D] border-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center text-lg font-medium">
                    <img src="/icon5.png" alt="" />
                    <span>Anu</span>
                  </div>
                  <span className="text-sm text-neutral-400">15/08/24</span>
                  <div className="flex flex-col mt-4 gap-4">
                    <p className="">
                      Such a gorgeous necklace. Got many compliments as well.
                      Absolutely loved it
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="bg-[#D9D9D9] w-[111px] aspect-square"></div>
                      <div className="bg-[#D9D9D9] w-[111px] aspect-square"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <hr className="border-[#FF8F9D] border-1" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center text-lg font-medium">
                    <img src="/icon5.png" alt="" />
                    <span>Anu</span>
                  </div>
                  <span className="text-sm text-neutral-400">15/08/24</span>
                  <div className="flex flex-col mt-4 gap-4">
                    <p className="">
                      Looks beautiful 😻❤️❤️❤️ Go for it girls 😍💝💐 the
                      quality is good ..
                    </p>
                    <div className="bg-[#D9D9D9] w-[111px] aspect-square"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
