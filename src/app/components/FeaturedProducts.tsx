import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-[#1D1F5B] mb-8 text-center">
        Featured Products
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
  {/* Icons in top-left corner */}
  <div className="aspect-square bg-gray-200 flex justify-center items-center relative">
    <div className="flex justify-center items-center h-full">
      <Image
        src="/Images/image6.png"
        alt="Brown chair"
        width={228}
        height={178}
        className="object-cover"
      />
    </div>
    <div className="absolute left-3 top-3  opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 z-10">
    <button className="p-2 rounded-full bg-[#EEEFFB]  hover:bg-[#EEEFFB] transition-colors cursor-pointer">
        <ShoppingCart className="w-6 h-6 text-[#2F1AC4]" />
      </button>
      <button className="p-2 rounded-full hover:bg-[#EEEFFB] transition-colors">
        <Heart className="w-6 h-6 text-[#1389FF]" />
      </button>
      <button className="p-2 rounded-full hover:bg-[#EEEFFB] transition-colors">
        <ZoomIn className="w-6 h-6 text-[#1389FF]" />
      </button>
    </div>
  </div>

  {/* Card Content */}
  <div className="p-4 text-center transition-colors duration-300 group-hover:bg-[#2f1ac4]">
    <h3 className="text-[#FB2E86] font-bold mb-2 transition-colors duration-300 group-hover:text-white">
      Cantilever chair
    </h3>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <button className="mb-36 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        View Details
      </button>
    </div>
    <div className="flex items-center justify-center gap-2 mb-2">
      <div className="w-6 h-2 bg-[#05E6B7] rounded"></div>
      <div className="w-6 h-2 bg-[#F701A8] rounded"></div>
      <div className="w-6 h-2 bg-[#FFEAC1] rounded"></div>
    </div>
    <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
      Code:Y523201
    </p>
    <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
      $42.00
    </p>
  </div>
</div>


        {/* Product Card 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
          {/* Product Image */}
          <div className="aspect-square bg-gray-200 flex justify-center items-center relative">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/Images/image 1.png"
              alt="Brown chair"
              width={170}
              height={150}
              className="object-cover"
            />
          </div>
          <div className="absolute left-3 top-3  opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 z-10">
            <button className="p-2 rounded-full bg-[#EEEFFB]  hover:bg-[#EEEFFB] transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]  transition-colors cursor-pointer pointer-events-auto">
              <Heart className="w-6 h-6 text-[#1389FF]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]  transition-colors cursor-pointer">
              <ZoomIn className="w-6 h-6 text-[#1389FF]" />
            </button>
          </div>
          </div>


          {/* Card Content */}
          <div className="p-4 text-center transition-colors duration-300 group-hover:bg-[#2f1ac4]">
            <h3 className="text-[#FB2E86] font-bold mb-2 transition-colors duration-300 group-hover:text-white">
              Cantilever chair
            </h3>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button className="mb-36 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                View Details
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-2 bg-[#05E6B7] rounded"></div>
              <div className="w-6 h-2 bg-[#F701A8] rounded"></div>
              <div className="w-6 h-2 bg-[#FFEAC1] rounded"></div>
            </div>
            <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
              Code:Y523201
            </p>
            <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
              $42.00
            </p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
          {/* Product Image */}
          <div className="aspect-square bg-gray-200 flex justify-center items-center relative">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/Images/image69.png"
              alt="Brown chair"
              width={175}
              height={175}
              className="object-cover"
            />
          </div>
          <div className="absolute left-3 top-3  opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 z-10">
            <button className="p-2 rounded-full bg-[#EEEFFB]  hover:bg-[#EEEFFB] transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]  transition-colors cursor-pointer pointer-events-auto">
              <Heart className="w-6 h-6 text-[#1389FF]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]  transition-colors cursor-pointer">
              <ZoomIn className="w-6 h-6 text-[#1389FF]" />
            </button>
          </div>
          </div>

          {/* Card Content */}
          <div className="p-4 text-center transition-colors duration-300 group-hover:bg-[#2f1ac4]">
            <h3 className="text-[#FB2E86] font-bold mb-2 transition-colors duration-300 group-hover:text-white">
              Cantilever chair
            </h3>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button className="mb-36 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                View Details
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-2 bg-[#05E6B7] rounded"></div>
              <div className="w-6 h-2 bg-[#F701A8] rounded"></div>
              <div className="w-6 h-2 bg-[#FFEAC1] rounded"></div>
            </div>
            <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
              Code:Y523201
            </p>
            <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
              $42.00
            </p>
          </div>
        </div>



        {/* Product Card 4 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
          {/* Icons in top-left corner */}
          <div className="absolute top-3 left-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button className="p-2 rounded-full bg-[#EEEFFB]  hover:bg-[#EEEFFB] transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]  transition-colors cursor-pointer pointer-events-auto">
              <Heart className="w-6 h-6 text-[#1389FF]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]  transition-colors cursor-pointer">
              <ZoomIn className="w-6 h-6 text-[#1389FF]" />
            </button>
          </div>

          {/* Product Image */}
          <div className="aspect-square bg-gray-200 flex justify-center items-center relative">
            <Image
              src="/Images/image3.png"
              alt="Brown chair"
              width={216}
              height={151}
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="p-4 text-center transition-colors duration-300 group-hover:bg-[#2f1ac4]">
            <h3 className="text-[#FB2E86] font-bold mb-2 transition-colors duration-300 group-hover:text-white">
              Cantilever chair
            </h3>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button className="mb-36 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                View Details
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-2 bg-[#05E6B7] rounded"></div>
              <div className="w-6 h-2 bg-[#F701A8] rounded"></div>
              <div className="w-6 h-2 bg-[#FFEAC1] rounded"></div>
            </div>
            <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
              Code:Y523201
            </p>
            <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
              $42.00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

