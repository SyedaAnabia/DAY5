import { CartProvider } from '@/components/CartContext';
import AddToCartButton from '@/components/AddToCartButton';

const App = () => {
  const product = {
    _id: '123',
    title: 'Sample Product',
    price: 100,
    imageUrl: '/sample.jpg',
  };

  return (
    <CartProvider>
      <AddToCartButton product={product} />
    </CartProvider>
  );
};

export default App;
