import {Comment} from './comment';

export interface Item {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  description: string;
  featured: boolean;
  price: number;
  comments: Comment[];
}
