export interface Product {
  id: number;
  name: string;
  origin: string;
  roast: 'light' | 'medium' | 'dark';
  price: number;
  image: string;
  description: string;
  notes: string[];
  weight: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Эфиопия Сидамо",
    origin: "Эфиопия",
    roast: "light",
    price: 890,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    description: "Изысканный кофе с ярким цветочным ароматом и нотами бергамота",
    notes: ["Бергамот", "Жасмин", "Персик"],
    weight: 250
  },
  {
    id: 2,
    name: "Колумбия Супремо",
    origin: "Колумбия",
    roast: "medium",
    price: 750,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    description: "Классический сбалансированный вкус с ореховыми оттенками",
    notes: ["Карамель", "Орех", "Шоколад"],
    weight: 250
  },
  {
    id: 3,
    name: "Бразилия Сантос",
    origin: "Бразилия",
    roast: "dark",
    price: 680,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
    description: "Плотный насыщенный кофе с шоколадными нотами",
    notes: ["Темный шоколад", "Орех", "Карамель"],
    weight: 250
  },
  {
    id: 4,
    name: "Кения АА",
    origin: "Кения",
    roast: "light",
    price: 950,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
    description: "Яркая кислинка с ягодными нотами и винным послевкусием",
    notes: ["Черная смородина", "Грейпфрут", "Вино"],
    weight: 250
  },
  {
    id: 5,
    name: "Гватемала Антигуа",
    origin: "Гватемала",
    roast: "medium",
    price: 820,
    image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&h=400&fit=crop",
    description: "Сложный профиль с пряными и цветочными оттенками",
    notes: ["Специи", "Какао", "Цветы"],
    weight: 250
  },
  {
    id: 6,
    name: "Вьетнам Далат",
    origin: "Вьетнам",
    roast: "dark",
    price: 620,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "Крепкий кофе с землистыми нотами и горьким шоколадом",
    notes: ["Горький шоколад", "Земля", "Табак"],
    weight: 250
  },
  {
    id: 7,
    name: "Коста-Рика Тарразу",
    origin: "Коста-Рика",
    roast: "medium",
    price: 880,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    description: "Чистый вкус с цитрусовой кислинкой и медовой сладостью",
    notes: ["Мед", "Апельсин", "Миндаль"],
    weight: 250
  },
  {
    id: 8,
    name: "Индонезия Суматра",
    origin: "Индонезия",
    roast: "dark",
    price: 790,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    description: "Полнотелый кофе с травяными и земляными нотами",
    notes: ["Кедр", "Травы", "Темный шоколад"],
    weight: 250
  }
];
