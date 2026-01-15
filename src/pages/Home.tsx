import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Кофе со всего мира
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Отборные сорта кофе, обжаренные с любовью. Доставка свежего зерна прямо к вам домой.
          </p>
          <Link to="/catalog">
            <Button size="lg" className="text-base px-8">
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Популярные сорта
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.origin}</p>
                    <p className="text-lg font-semibold">{product.price} ₽</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Coffee" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Свежая обжарка</h3>
              <p className="text-sm text-muted-foreground">
                Обжариваем кофе небольшими партиями для максимальной свежести
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">
                Доставляем по всей России в течение 2-5 дней
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">
                Работаем только с проверенными поставщиками
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
