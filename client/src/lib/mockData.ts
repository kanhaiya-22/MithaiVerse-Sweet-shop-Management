import cupcakeImg from '@assets/stock_images/delicious_gourmet_cu_f534963b.jpg';
import donutImg from '@assets/stock_images/colorful_glazed_donu_20e33317.jpg';
import lollipopImg from '@assets/stock_images/swirly_rainbow_lolli_1f1312ca.jpg';
import chocolateImg from '@assets/stock_images/artisan_chocolate_tr_4bf1a324.jpg';

export interface Sweet {
  id: string;
  name: string;
  category: 'Cake' | 'Candy' | 'Chocolate' | 'Pastry';
  price: number;
  stock: number;
  description: string;
  image: string;
}

export const CATEGORIES = ['All', 'Cake', 'Candy', 'Chocolate', 'Pastry'];

export const MOCK_SWEETS: Sweet[] = [
  {
    id: '1',
    name: 'Rainbow Swirl Lollipop',
    category: 'Candy',
    price: 2.50,
    stock: 50,
    description: 'A classic giant lollipop with mesmerizing rainbow swirls. Sweet, fruity, and long-lasting.',
    image: lollipopImg
  },
  {
    id: '2',
    name: 'Gourmet Vanilla Cupcake',
    category: 'Cake',
    price: 4.00,
    stock: 12,
    description: 'Fluffy vanilla sponge topped with rich buttercream frosting and delicate sprinkles.',
    image: cupcakeImg
  },
  {
    id: '3',
    name: 'Galaxy Glazed Donut',
    category: 'Pastry',
    price: 3.50,
    stock: 24,
    description: 'Freshly fried donut dipped in a galaxy-themed mirror glaze with edible glitter.',
    image: donutImg
  },
  {
    id: '4',
    name: 'Artisan Dark Truffles',
    category: 'Chocolate',
    price: 12.00,
    stock: 8,
    description: 'Box of 6 hand-crafted dark chocolate truffles with ganache filling.',
    image: chocolateImg
  },
  {
    id: '5',
    name: 'Strawberry Macaron',
    category: 'Pastry',
    price: 2.00,
    stock: 0,
    description: 'Delicate almond meringue cookies sandwiched with fresh strawberry jam.',
    image: cupcakeImg // Reusing for now
  },
  {
    id: '6',
    name: 'Mint Chocolate Chip',
    category: 'Chocolate',
    price: 5.50,
    stock: 15,
    description: 'Refreshing mint chocolate bark with crunchy cookie pieces.',
    image: chocolateImg // Reusing
  }
];
