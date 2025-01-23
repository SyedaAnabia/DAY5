
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";


function Hero() {
  return (
    <div className="relative w-screen h-[700px]">
      {/* Background Image */}
      <img src="/images/hero.jpg" alt="hero" className="w-full h-full object-cover" />

      {/* Box on the bottom-right */}
<div className="absolute bottom-10 sm:right-10 w-full max-w-[500px] h-auto md:bottom-20 md:right-20 md:max-w-[643px] bg-pink-100 shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
  <h2 className="text-black font-semibold text-lg sm:text-xl tracking-wide mb-2">
    New Arrivals
  </h2>
  <h1 className="text-yellow-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
    Discover Our <br /> New Collection
  </h1>
  <p className="text-black mt-4 leading-relaxed text-sm sm:text-base">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
    elit tellus, luctus nec ullamcorper mattis.
  </p>
  <div className="mt-6">
    <button className="w-full max-w-[200px] h-[50px] md:h-[65px] bg-yellow-700 text-white font-bold text-sm sm:text-lg rounded-md hover:bg-yellow-600 transition duration-300">
      Buy Now
    </button>
  </div>
</div>
</div>
  );
}

export default Hero;



































//     <section className="bg-bannerImg relative bg-repeat bg-cover bg-bottom w-full h-screen flex items-center">
//       <div className="absolute right-12 top-36 bg-[#FFF3E3] p-8 rounded-lg shadow-lg">
//        <Image height={400} width={400} alt="hero" src="/images/hero.jpg" />
//         <h4 className="font-bold text-lg">New Arrival</h4>
//         <h1 className="text-3xl text-[#B88E2F] font-semibold">Discover Our</h1>
//         <h1 className="text-4xl mb-3 font-bold text-[#B88E2F]">New Collection</h1>
//         <p className="text-sm text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
//           Numquam quo, ipsa expedita eius voluptate.
//         </p>
//         <Link href="/shop">
//         <Button className="text-white bg-[#B88E2F] mt-5">

//           Buy Now</Button></Link>
//       </div>
//     </section>
//   );
// };

// export default Hero;

