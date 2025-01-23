import Image from "next/image";

export default function TheRange() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[60px] pt-[30px] md:pt-0 items-center bg-[#F4F5F7] px-4">
      <div className="w-fit text-center">
        <h2 className="text-Font font-bold text-[28px] sm:text-[32px] md:text-[36px]">Browse The Range</h2>
        <p className="text-Font1 font-normal text-[18px] sm:text-[20px] md:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {/* Dining Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[20px] sm:gap-[30px]">
          <div className="w-full">
            <Image
              src="/images/dining.png"
              alt="image1"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[22px] sm:text-[24px] md:text-[26px] text-Font">Dining</p>
          </div>
        </div>

        {/* Living Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[20px] sm:gap-[30px]">
          <div className="w-full">
            <Image
              src="/images/living.png"
              alt="image2"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[22px] sm:text-[24px] md:text-[26px] text-Font">Living</p>
          </div>
        </div>

        {/* Bedroom Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[20px] sm:gap-[30px]">
          <div className="w-full">
            <Image
              src="/images/bedroom.png"
              alt="image3"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[22px] sm:text-[24px] md:text-[26px] text-Font">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
