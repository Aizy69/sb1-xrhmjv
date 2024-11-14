import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SMOK Nord 4',
    description: 'Latest pod system with adjustable airflow',
    price: 49.99,
    condition: 'new',
    category: 'device',
    imageUrl: '/images/nord4.jpg',
    stock: 10
  },
  {
    id: '2',
    name: 'Refurbished Voopoo Drag',
    description: 'Certified refurbished mod with warranty',
    price: 29.99,
    condition: 'used',
    category: 'device',
    imageUrl: '/images/drag.jpg',
    stock: 5
  }
];

export const Home: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    // Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to VapeStore</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};