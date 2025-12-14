import gulabJamunImg from '@assets/stock_images/gulab_jamun_indian_s_17496bd3.jpg';
import kajuKatliImg from '@assets/stock_images/kaju_katli_diamond_s_390f4434.jpg';
import jalebiImg from '@assets/stock_images/jalebi_spiraled_swee_47fe2be5.jpg';
import rasgullaImg from '@assets/stock_images/rasgulla_white_sweet_8988ef69.jpg';
import ladooImg from '@assets/stock_images/motichoor_ladoo_oran_b902d9b3.jpg';
import soanPapdiImg from '@assets/stock_images/soan_papdi_flaky_swe_589c210c.jpg';
import mysorePakImg from '@assets/stock_images/mysore_pak_sweet_e6888951.jpg';
import assortmentImg from '@assets/stock_images/indian_sweets_assort_aaef6424.jpg';

export interface Sweet {
  id: string;
  name: string;
  category: 'Milk-based' | 'Dry Fruit' | 'Fried' | 'Festival Specials' | 'Other';
  price: number;
  stock: number;
  description: string;
  image: string;
}

export const CATEGORIES = ['All', 'Milk-based', 'Dry Fruit', 'Fried', 'Festival Specials'];

export const MOCK_SWEETS: Sweet[] = [
  {
    id: '1',
    name: 'Gulab Jamun',
    category: 'Fried',
    price: 350,
    stock: 50,
    description: 'Soft, spongy milk-solid balls soaked in rose-scented sugar syrup. A classic favorite.',
    image: gulabJamunImg
  },
  {
    id: '2',
    name: 'Kaju Katli',
    category: 'Dry Fruit',
    price: 900,
    stock: 25,
    description: 'Diamond-shaped cashew fudge topped with edible silver leaf. Rich and melt-in-mouth.',
    image: kajuKatliImg
  },
  {
    id: '3',
    name: 'Jalebi',
    category: 'Fried',
    price: 280,
    stock: 40,
    description: 'Crispy, spiraled sweets deep-fried and dipped in saffron sugar syrup.',
    image: jalebiImg
  },
  {
    id: '4',
    name: 'Rasgulla',
    category: 'Milk-based',
    price: 320,
    stock: 30,
    description: 'Spongy cottage cheese balls cooked in light sugar syrup. Served chilled.',
    image: rasgullaImg
  },
  {
    id: '5',
    name: 'Motichoor Ladoo',
    category: 'Festival Specials',
    price: 400,
    stock: 60,
    description: 'Tiny gram flour pearls fried and mixed with sugar syrup, molded into delicious spheres.',
    image: ladooImg
  },
  {
    id: '6',
    name: 'Mysore Pak',
    category: 'Milk-based',
    price: 650,
    stock: 15,
    description: 'Traditional South Indian sweet made from ghee, sugar, and gram flour. Rich and buttery.',
    image: mysorePakImg
  },
  {
    id: '7',
    name: 'Soan Papdi',
    category: 'Other',
    price: 250,
    stock: 100,
    description: 'Cube-shaped crispy and flaky sweet made with gram flour, ghee, and cardamom.',
    image: soanPapdiImg
  },
  {
    id: '8',
    name: 'Assorted Gift Box',
    category: 'Festival Specials',
    price: 1200,
    stock: 20,
    description: 'A premium collection of our finest sweets, perfect for gifting on special occasions.',
    image: assortmentImg
  }
];
