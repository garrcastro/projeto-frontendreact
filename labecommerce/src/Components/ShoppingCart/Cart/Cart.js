
import { CartStyle } from './styled';

const Cart = (props) => {
const {cart, setCart} = props
const removeFromCart = (itemToRemove) => {
  const updatedCart = cart.map((item) => {
    if (item.id === itemToRemove.id) {
      if (item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return null;
      }
    } else {
      return item;
    }
  }).filter(item => item !== null);
  setCart(updatedCart);
};
    return (
      <CartStyle>
        <h2>Carrinho de Compras</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantidade: {item.amount}</p>
              <p>Valor: {item.amount * item.value}</p>
              <button onClick={() => removeFromCart(item)}>Remover</button>
            </div>
          ))}
        </div>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
      </CartStyle>
      
    );
}

export default Cart