import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Добавлено в корзину",
      description: `${product.name} добавлен в вашу корзину`,
    });
  };

  const roastLabels = {
    light: 'Светлая обжарка',
    medium: 'Средняя обжарка',
    dark: 'Темная обжарка',
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link to="/catalog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к каталогу
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">{product.origin}</p>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">{product.price} ₽</span>
                  <span className="text-muted-foreground">/ {product.weight}г</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Flame" size={20} className="text-muted-foreground" />
                    <span className="text-sm">{roastLabels[product.roast]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-muted-foreground" />
                    <span className="text-sm">Вес: {product.weight}г</span>
                  </div>
                </div>

                <Button onClick={handleAddToCart} size="lg" className="w-full">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Описание</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Вкусовые ноты</h2>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
