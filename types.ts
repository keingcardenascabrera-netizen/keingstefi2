
import { ReactNode } from 'react';

/**
 * Interfaces shared across the HeartRise application components.
 * Adding exports ensures this file is treated as a module by the TypeScript compiler.
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
}
