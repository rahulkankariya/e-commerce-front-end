import React, { useState } from "react";
import ProductGridCard from "./ProductGrid/ProductGridCard";

const ProductGrid: React.FC = () => {
  const allProducts = [
    {
      image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
      altText: 'Oculus VR',
      rating: 4.5,
      reviews: 145,
      productName: 'Oculus VR',
      reference: '1204',
      price: 149,
      productDetailLink: '/product-details',
      cartLink: '/product-details',
      isWishlisted: true
    },
    {
      image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
      altText: 'Oculus VR',
      rating: 4.5,
      reviews: 145,
      productName: 'Oculus VR',
      reference: '1204',
      price: 149,
      productDetailLink: '/product-details',
      cartLink: '/product-details',
      isWishlisted: false
    },
    {
      image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
      altText: 'Oculus VR',
      rating: 4.5,
      reviews: 145,
      productName: 'Oculus VR',
      reference: '1204',
      price: 149,
      productDetailLink: '/product-details',
      cartLink: '/product-details',
      isWishlisted: false
    },
    {
      image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
      altText: 'Oculus VR',
      rating: 4.5,
      reviews: 145,
      productName: 'Oculus VR',
      reference: '1204',
      price: 149,
      productDetailLink: '/product-details',
      cartLink: '/product-details',
      isWishlisted: false
    },
    {
      image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
      altText: 'Oculus VR',
      rating: 4.5,
      reviews: 145,
      productName: 'Oculus VR',
      reference: '1204',
      price: 149,
      productDetailLink: '/product-details',
      cartLink: '/product-details',
      isWishlisted: true
    },
    {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: false
      },
      {
        image: 'https://pixelwibes.com/template/ebazar/react/static/media/product-1.7a03b14fe7c11d16746f.jpg',
        altText: 'Oculus VR',
        rating: 4.5,
        reviews: 145,
        productName: 'Oculus VR',
        reference: '1204',
        price: 149,
        productDetailLink: '/product-details',
        cartLink: '/product-details',
        isWishlisted: true
      },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProducts = allProducts.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="flex h-screen relative">
      <div className="flex-1 bg-gray-100 overflow-y-auto p-4 w-full">
        <h1 className="text-2xl font-bold text-[#2b3d5f] mb-4">Product Grid</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-3">
          {visibleProducts.map((product, index) => (
            <ProductGridCard key={index} {...product} />
          ))}
        </div>

        {visibleCount < allProducts.length && (
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 bg-[#7258db] text-white rounded hover:bg-[#5c47b8] transition"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
