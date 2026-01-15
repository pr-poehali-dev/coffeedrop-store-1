import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoast, setSelectedRoast] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('default');

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.origin.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRoast = selectedRoast === 'all' || product.roast === selectedRoast;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesRoast && matchesPrice;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedRoast, priceRange, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRoast('all');
    setPriceRange([0, 1000]);
    setSortBy('default');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Каталог кофе</h1>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="search" className="text-base font-semibold mb-3 block">
                    Поиск
                  </Label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Название или страна"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Степень обжарки</Label>
                  <RadioGroup value={selectedRoast} onValueChange={setSelectedRoast}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all" className="font-normal cursor-pointer">Все</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="font-normal cursor-pointer">Светлая</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium" className="font-normal cursor-pointer">Средняя</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark" className="font-normal cursor-pointer">Темная</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Цена: {priceRange[0]} - {priceRange[1]} ₽
                  </Label>
                  <Slider
                    min={0}
                    max={1000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                </div>

                <Button onClick={resetFilters} variant="outline" className="w-full">
                  <Icon name="RotateCcw" size={18} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">По умолчанию</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="name">По названию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground">Товары не найдены</p>
                <Button onClick={resetFilters} variant="link" className="mt-2">
                  Сбросить фильтры
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{product.origin}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-semibold">{product.price} ₽</p>
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {product.roast === 'light' && 'Светлая'}
                            {product.roast === 'medium' && 'Средняя'}
                            {product.roast === 'dark' && 'Темная'}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
