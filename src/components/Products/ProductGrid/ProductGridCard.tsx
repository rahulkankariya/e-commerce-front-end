import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
interface ProductCardProps {
  image: string;
  altText: string;
  rating: number;
  reviews: number;
  productName: string;
  reference: string;
  price: number;
  productDetailLink: string;
  cartLink: string;
  isWishlisted?: boolean; 
}
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  altText,
  rating,
  reviews,
  productName,
  reference,
  price,
  productDetailLink,
  cartLink,
  isWishlisted
}) => {
  return (
    <div className="rounded-xl shadow-md bg-white">
  <div className="relative">
    <div className="overflow-hidden rounded-t-xl m-2.5">
      <img src={image} alt={altText} className="w-full h-auto object-cover" />
    </div>
    <a className="absolute top-2 right-2 m-2.5 text-red-600" href="#!">
    <a className="absolute top-2 right-2 m-2.5" href="#!">
  {isWishlisted ? (
    <FavoriteIcon className="text-red-600" />
  ) : (
    <FavoriteBorderIcon className="text-red-600" />
  )}
</a>
    </a>
  </div>

  <div className="p-4">
  <span className="mb-2 block items-center gap-1">
  <StarIcon className='text-yellow-500 ' /> {rating} ({reviews})
</span>
    <Link to={productDetailLink} className="font-bold text-lg text-gray-800 hover:underline">
      {productName}
    </Link>
    <p className="text-gray-500 text-sm">Reference {reference}</p>
    <span className="block font-bold text-xl text-yellow-500">${price}</span>
    <Link
  to={cartLink}
  className="inline-block mt-4 text-white px-4 py-2 rounded hover:opacity-90"
  style={{ backgroundColor: '#7258db' }}
>
  Add to Cart
</Link>

  </div>
</div>

  );
};

export default ProductCard;
