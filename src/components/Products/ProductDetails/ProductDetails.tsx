import React from 'react';
import ProductGallery from '../ProductGallery/Productallery';

const ProductDetailPage: React.FC = () => {
  const productImages = [
  'https://pixelwibes.com/template/ebazar/react/static/media/productslide-1.6c29adccd93b1bb3abff.jpg',
  'https://pixelwibes.com/template/ebazar/react/static/media/productslide-2.5baa8847661fd95de076.jpg',
  'https://pixelwibes.com/template/ebazar/react/static/media/productslide-3.db6e4b31c7d871674100.jpg',
  'https://pixelwibes.com/template/ebazar/react/static/media/productslide-4.0c7bacfcb7120659fc35.jpg',
  'https://pixelwibes.com/template/ebazar/react/static/media/productslide-5.eaf04e727191e6b31562.jpg'
  ];

  return (
    <div className="container mx-auto px-4">
      

    <h2 className="text-2xl font-semibold mb-6">Product Preview</h2>
    <div className="flex items-center bg-white">
    <div className="lg:w-1/2 w-full">
       <ProductGallery images={productImages} />
</div>

 

</div>

  </div>
  );
};

export default ProductDetailPage;
