import gulabJamunImg from '@assets/stock_images/gulab_jamun_indian_s_17496bd3.jpg';
import kajuKatliImg from '@assets/stock_images/kaju_katli_diamond_s_390f4434.jpg';
import jalebiImg from '@assets/stock_images/jalebi_spiraled_swee_47fe2be5.jpg';
import rasgullaImg from '@assets/stock_images/rasgulla_white_sweet_8988ef69.jpg';
import ladooImg from '@assets/stock_images/motichoor_ladoo_oran_b902d9b3.jpg';
import soanPapdiImg from '@assets/stock_images/soan_papdi_flaky_swe_589c210c.jpg';
import mysorePakImg from '@assets/stock_images/mysore_pak_sweet_e6888951.jpg';
import assortmentImg from '@assets/stock_images/indian_sweets_assort_aaef6424.jpg';
import ghewarImg from '@assets/stock_images/ghewar_indian_sweet_c71eaa96.jpg';
import malpuaImg from '@assets/stock_images/malpua_indian_sweet_6559da03.jpg';
import imartiImg from '@assets/stock_images/imarti_sweet_2f8ae978.jpg';
import kalakandImg from '@assets/stock_images/kalakand_sweet_bbfc581d.jpg';
import chumChumImg from '@assets/stock_images/chum_chum_sweet_64cd5edd.jpg';
import sandeshImg from '@assets/stock_images/sandesh_bengali_swee_2674b98c.jpg';
import balushahiImg from '@assets/stock_images/balushahi_sweet_abcc8aef.jpg';
import mawaKachoriImg from '@assets/stock_images/mawa_kachori_sweet_15842893.jpg';
import moongDalHalwaImg from '@assets/stock_images/moong_dal_halwa_d6fefb0a.jpg';
import besanLadooImg from '@assets/stock_images/besan_ladoo_3b2031e5.jpg';
import coconutBarfiImg from '@assets/stock_images/coconut_barfi_d65bd4e8.jpg';
import khoyaPedaImg from '@assets/stock_images/khoya_peda_f458f9d0.jpg';
import anjeerRollImg from '@assets/stock_images/anjeer_roll_5468f682.jpg';
import tilGulImg from '@assets/stock_images/til_gul_laddu_548b48d3.jpg';
import phirniImg from '@assets/stock_images/phirni_dessert_159258f5.jpg';

export interface Sweet {
  id: string;
  name: string;
  category: 'Milk-based' | 'Dry Fruit' | 'Fried' | 'Festival Specials' | 'Other';
  price: number;
  stock: number;
  description: string;
  image: string;
}

export const CATEGORIES = ['All', 'Milk-based', 'Dry Fruit', 'Fried', 'Festival Specials', 'Other'];

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
    name: 'Ghewar',
    category: 'Festival Specials',
    price: 750,
    stock: 20,
    description: 'Rajasthani disc-shaped sweet made from ghee, flour, and sugar syrup. Topped with rabri.',
    image: ghewarImg
  },
  {
    id: '9',
    name: 'Malpua',
    category: 'Fried',
    price: 300,
    stock: 35,
    description: 'Sweet pancakes deep-fried and soaked in syrup, often served with rabri.',
    image: malpuaImg
  },
  {
    id: '10',
    name: 'Imarti',
    category: 'Fried',
    price: 320,
    stock: 40,
    description: 'Flower-shaped sweet made from urad dal batter, deep-fried and soaked in syrup.',
    image: imartiImg
  },
  {
    id: '11',
    name: 'Kalakand',
    category: 'Milk-based',
    price: 550,
    stock: 25,
    description: 'Moist and grainy milk cake made with solidified milk and paneer.',
    image: kalakandImg
  },
  {
    id: '12',
    name: 'Chum Chum',
    category: 'Milk-based',
    price: 380,
    stock: 30,
    description: 'Oval-shaped Bengali sweet made from chenna, cooked in syrup and stuffed with cream.',
    image: chumChumImg
  },
  {
    id: '13',
    name: 'Sandesh',
    category: 'Milk-based',
    price: 600,
    stock: 20,
    description: 'Delicate Bengali sweet made from fresh chenna and sugar, often flavored with cardamom.',
    image: sandeshImg
  },
  {
    id: '14',
    name: 'Balushahi',
    category: 'Fried',
    price: 420,
    stock: 45,
    description: 'Flaky doughnut-like pastry made from flour and ghee, soaked in sugar syrup.',
    image: balushahiImg
  },
  {
    id: '15',
    name: 'Mawa Kachori',
    category: 'Festival Specials',
    price: 480,
    stock: 15,
    description: 'Crispy pastry filled with sweet mawa and nuts, dipped in sugar syrup.',
    image: mawaKachoriImg
  },
  {
    id: '16',
    name: 'Moong Dal Halwa',
    category: 'Festival Specials',
    price: 500,
    stock: 25,
    description: 'Rich, warm pudding made from split yellow lentils, ghee, and nuts.',
    image: moongDalHalwaImg
  },
  {
    id: '17',
    name: 'Besan Ladoo',
    category: 'Festival Specials',
    price: 380,
    stock: 55,
    description: 'Popular Indian sweet balls made with gram flour, sugar, and ghee.',
    image: besanLadooImg
  },
  {
    id: '18',
    name: 'Coconut Barfi',
    category: 'Milk-based',
    price: 400,
    stock: 40,
    description: 'Dense, fudge-like sweet made with desiccated coconut, milk, and sugar.',
    image: coconutBarfiImg
  },
  {
    id: '19',
    name: 'Khoya Peda',
    category: 'Milk-based',
    price: 520,
    stock: 35,
    description: 'Traditional semi-soft sweet made from khoya, sugar, and cardamom.',
    image: khoyaPedaImg
  },
  {
    id: '20',
    name: 'Anjeer Roll',
    category: 'Dry Fruit',
    price: 1100,
    stock: 18,
    description: 'Healthy and rich sweet roll made from figs (anjeer) and nuts, sugar-free options available.',
    image: anjeerRollImg
  },
  {
    id: '21',
    name: 'Til Gul Laddu',
    category: 'Festival Specials',
    price: 280,
    stock: 60,
    description: 'Crunchy sesame and jaggery balls, traditionally eaten during Makar Sankranti.',
    image: tilGulImg
  },
  {
    id: '22',
    name: 'Phirni',
    category: 'Milk-based',
    price: 200,
    stock: 30,
    description: 'Creamy rice pudding flavored with cardamom and saffron, served in clay pots.',
    image: phirniImg
  },
  {
    id: '23',
    name: 'Assorted Gift Box',
    category: 'Festival Specials',
    price: 1200,
    stock: 20,
    description: 'A premium collection of our finest sweets, perfect for gifting on special occasions.',
    image: assortmentImg
  }
];
