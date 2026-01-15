import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">
            Добавьте товары из каталога, чтобы оформить заказ
          </p>
          <Link to="/catalog">
            <Button size="lg">
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Корзина</h1>
          <Button onClick={clearCart} variant="ghost" size="sm">
            <Icon name="Trash2" size={18} className="mr-2" />
            Очистить
          </Button>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex gap-4">
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                      />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">{item.origin}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 h-8 text-center"
                            min="1"
                          />
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-lg">{item.price * item.quantity} ₽</p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Итого</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Товары ({cart.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Доставка</span>
                    <span className="text-green-600">Бесплатно</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>К оплате</span>
                  <span>{totalPrice} ₽</span>
                </div>

                <Button size="lg" className="w-full mb-3">
                  Оформить заказ
                </Button>

                <Link to="/catalog">
                  <Button variant="outline" size="lg" className="w-full">
                    Продолжить покупки
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
