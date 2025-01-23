import Image from "next/image";
import {
  Star,
  Heart,
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const colorOptions = [
  { name: "Blue", class: "bg-[#23A6F0]" },
  { name: "Green", class: "bg-[#2DC071]" },
  { name: "Orange", class: "bg-[#E77C40]" },
  { name: "Navy", class: "bg-[#252B42]" },
];

export default async function ProductDetail({
  searchParams,
}: {
  searchParams: Promise<{
    name: string;
    price: number;
    description: string;
    image: string;
  }>;
}) {
  const { name, price, description, image } = await searchParams;

  console.log(name);

  return (
    <section className="bg-[#FAFAFA] py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="relative">
            <div className=" w-full rounded-lg overflow-hidden bg-red-400">
              <Image
                src={image}
                alt={image}
                width={300}
                height={300}
                className="object-cover absolute"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 p-2 rounded-full">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 p-2 rounded-full">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            {/* <div className="flex gap-4 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-[100px] h-[75px] rounded-lg overflow-hidden ${
                    currentImage === index ? 'ring-2 ring-[#23A6F0]' : 'opacity-50'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={Thumbnail ${index + 1}}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>  */}
          </div>

          {/* Product Details */}
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-6">
              <h4 className="text-xl text-[#252B42] mb-3">{name}</h4>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-[#F3CD03] text-[#F3CD03]"
                    />
                  ))}
                  <Star className="w-5 h-5 text-[#F3CD03]" />
                </div>
                <span className="text-sm font-bold text-[#737373]">
                  10 Reviews
                </span>
              </div>

              <h5 className="text-2xl font-bold text-[#252B42] mb-2">
                ${price}
              </h5>

              <div className="flex items-center gap-1 mb-4">
                <span className="text-sm font-bold text-[#737373]">
                  Availability :
                </span>
                <span className="text-sm font-bold text-[#23A6F0]">
                  In Stock
                </span>
              </div>

              <p className="text-sm text-[#858585] mb-8">{description}</p>

              <hr className="border-[#BDBDBD] mb-8" />

              <div className="flex gap-2.5 mb-8">
                {colorOptions.map((color) => (
                 <button
                 key={color.name}
                 className={`w-[30px] h-[30px] rounded-full ${color.class}`}
                 aria-label={`Select ${color.name} color`}
               />               
                ))}
              </div>

              <div className="flex gap-2.5">
                <Link href={'cart'}>
                <Button className="bg-[#23A6F0] hover:bg-[#1a7ab0] h-11">
                  add to cart
                </Button>
                </Link>
                {["heart", "shopping-cart", "eye"].map((icon) => (
                  <Button
                    key={icon}
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full border-[#E8E8E8]"
                  >
                    {icon === "heart" && <Heart className="w-5 h-5" />}
                    {icon === "shopping-cart" && (
                      <ShoppingCart className="w-5 h-5" />
                    )}
                    {icon === "eye" && <Eye className="w-5 h-5" />}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}