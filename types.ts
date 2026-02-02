
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}
