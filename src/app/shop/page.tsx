"use client";
import { Icon } from "@iconify/react";
import Shipping from "@/components/Shipping";
import Link from "next/link";

const OurProducts = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/images/image-1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/images/image-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-4.png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/images/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/images/image-6.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-7.png",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
  {
    id: 9,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/images/image-1.png",
  },
  {
    id: 10,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/images/image-2.png",
  },
  {
    id: 11,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-3.png",
  },
  {
    id: 12,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-4.png",
  },
  {
    id: 13,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/images/image-5.png",
  },
  {
    id: 14,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/images/image-6.png",
  },
  {
    id: 15,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-7.png",
  },
  {
    id: 16,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
];

export default function Page() {
  return (
    <>
    <div>
      <div className="flex flex-col items-center">
        {/* Background Section */}
        <div
          className="relative w-full sm:w-[1440px] h-[316px] sm:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shop.png')" }}
        >
          <div className="flex flex-col justify-center items-center text-center text-white h-full bg-gradient-to-t">
            <h2 className="text-4xl mb-2 font-bold text-black">Shop</h2>
            <h3 className="text-xl font-normal text-black">Home &gt; Shop</h3>
          </div>
        </div>

        {/* Filter Section */}
<div className="w-full sm:w-[1440px] px-2 py-3 bg-[#F9F1E7] flex flex-wrap sm:flex-nowrap justify-between items-center rounded">
  <div className="flex flex-wrap sm:flex-nowrap items-center space-x-4 pl-0 sm:pl-20 mb-2 sm:mb-0">
    <img src="/images/filter.jpg" alt="Filter Icon" className="w-6 h-6" />
    <h4 className="text-lg font-medium text-black">Filter</h4>
    <img src="/images/filter2.jpg" alt="Filter Icon" className="w-6 h-6" />
    <img src="/images/filter3.jpg" alt="Filter Icon" className="w-6 h-6" />
    <div className="text-black font-bold pl-2 hidden sm:block">|</div>
    <div className="font-medium text-black pl-0 sm:pl-4 mt-2 sm:mt-0">
      Showing 1-16 of 32 results
    </div>
  </div>
  <div className="flex flex-wrap sm:flex-nowrap items-center">
    <label htmlFor="sort-show" className="text-lg font-medium mr-2">
      Show
    </label>
    <select id="sort-show" className="p-2 sm:p-3 border rounded mr-2 sm:mr-4">
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
    </select>
    <label htmlFor="sort" className="text-lg font-medium mr-2">
      Sort By
    </label>
    <select id="sort" className="p-2 border rounded">
      <option value="default">Default</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="newest">Newest</option>
    </select>
  </div>
</div>

        {/* Products Section */}
        <div className="w-full border-b-2 py-8 md:py-16 flex flex-col justify-center bg-[#F4F5F7] px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
            {OurProducts.map((product) => (
              <div
                className="bg-white group relative overflow-hidden w-full max-w-[285px] mx-auto"
                key={product.id}
              >
                <div className="w-full h-[200px] sm:h-[240px] md:h-[300px]">
                  <div
                    className="flex h-full w-full bg-no-repeat bg-center bg-cover relative group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {product.discount && (
                      <div className="h-[36px] md:h-[48px] w-[36px] md:w-[48px] bg-red-600 rounded-full flex items-center justify-center absolute top-4 right-4 md:top-6 md:right-6">
                        <p className="text-[12px] md:text-[16px] font-medium text-white">{product.discount}</p>
                      </div>
                    )}
                  </div>
                  <div className="h-full absolute bottom-0 w-full flex flex-col gap-2 md:gap-4 items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-gray-800 transition-opacity duration-300">
                    <button className="text-sm md:text-[16px] font-medium text-[#B88E2F] bg-white px-6 md:px-10 py-2 md:py-3">
                      Add to Cart
                    </button>
                    <div className="flex gap-2 md:gap-4 text-white text-xs md:text-sm mt-1">
                      <button className="flex items-center gap-1 md:gap-2 font-semibold">
                        <Icon icon="gridicons:share" /> Share
                      </button>
                      <button className="flex items-center gap-1 md:gap-2 font-semibold">
                        <Icon icon="fluent:arrow-swap-28-regular" /> Compare
                      </button>
                      <button className="flex items-center gap-1 md:gap-2 font-semibold">
                        <Icon icon="mingcute:heart-line" /> Like
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full pt-4 md:pt-6 pb-6 px-4">
                  <h2 className="text-[18px] md:text-[24px] font-semibold text-gray-800">{product.name}</h2>
                  <h4 className="text-[14px] md:text-[16px] font-medium text-gray-600">{product.fullname}</h4>
                  <div className="w-full flex gap-2 md:gap-4 items-center">
                    <p className="text-[16px] md:text-[20px] font-semibold text-gray-800">{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-[14px] md:text-[16px] font-normal text-gray-400 line-through">{product.originalPrice}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 mx-1 rounded ${
                  page === 1 ? "bg-yellow-600 text-white" : "bg-pink-100 hover:bg-pink-200"
                }`}
                onClick={() => console.log(`Go to page ${page}`)}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-pink-100 rounded-r hover:bg-pink-200"
              onClick={() => console.log("Next")}
            >
              Next
            </button>
          </div>
        </div>

        
      </div>
    </div>
    <Shipping/>
    </>
  );
}
