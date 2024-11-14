import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <span className={`inline-block px-2 py-1 rounded-full text-sm ${
          product.condition === 'new' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {product.condition}
        </span>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};