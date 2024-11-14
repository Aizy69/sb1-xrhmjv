export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  condition: 'new' | 'used';
  category: 'device' | 'accessory' | 'repair';
  imageUrl: string;
  stock: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}