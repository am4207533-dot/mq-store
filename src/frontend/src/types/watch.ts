export interface Watch {
  id: string;
  name: string;
  collection: string;
  price: number;
  priceLabel: string;
  image: string;
  category: "gold" | "steel" | "black" | "two-tone";
  description: string;
  features: string[];
  movement: string;
  caseDiameter: string;
  waterResistance: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export type WatchCategory = "all" | "gold" | "steel" | "black" | "two-tone";

export interface CartItem {
  watch: Watch;
  quantity: number;
}
