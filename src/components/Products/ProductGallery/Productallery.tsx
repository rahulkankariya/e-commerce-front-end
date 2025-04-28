import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="mt-50 ml-2">
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-6">
        {/* Left: Thumbnails */}
        <div className="flex flex-col gap-4 w-20">
          {images.map((img, index) => (
            <button
              key={index}
              className={`border rounded-md overflow-hidden ${
                activeImage === img ? "border-white" : "border-white"
              }`}
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-20 h-20 object-cover hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>

        {/* Right: Main Image */}
        <div className="flex items-center justify-center">
          <img
            src={activeImage}
            alt="Active Product"
            className="w-full h-[400px] object-contain rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
