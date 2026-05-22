export interface RoomUnit {
  id: string;
  name: string;
  status: 'tersedia' | 'terisi';
  priceMonthly: number;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stayDuration: string;
  rating: number;
}

export interface FurnitureItem {
  id: string;
  name: string;
  emoji: string;
  width: number; // relative width in layout grid
  height: number; // relative height in layout grid
  iconName?: string;
}

export interface PlacedFurniture {
  id: string;
  itemId: string;
  x: number; // percentage from left
  y: number; // percentage from top
  rotation: number; // degrees (0, 90, 180, 270)
}
