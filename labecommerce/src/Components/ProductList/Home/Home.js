
import { HomeStyle, HomeHeader, ProductCardShow } from './styled';
import { ProductCardStyle, ProductCardImage, ProductCardDetails } from "../ProductCard/styled";


const Home = (props) => {
const {productsList, searchFilter, ordination, handleOrdination, cart, setCart, minFilter, maxFilter} = props

const addCart = (nave) => {
  const checkNave = cart.find((item) => item.id === nave.id);
  if (!checkNave) {
    setCart([...cart, { ...nave, amount: 1 }]);
  } else {
    updateCart(checkNave, checkNave.amount + 1);
  }
};

const updateCart = (item, amount) => {
  const updatedCart = cart.map(cartItem =>
    cartItem.id === item.id ? { ...cartItem, amount: amount } : cartItem
  );
  setCart(updatedCart);
};

const renderProducts = productsList
.filter(nave=> {
  if(searchFilter){
    return nave.name.toLowerCase().includes(searchFilter.toLowerCase())
  }else{
    return nave
  }})
  .filter(nave => {
    if (minFilter && maxFilter) {
      return nave.value >= minFilter && nave.value <= maxFilter;
    } else if (minFilter) {
      return nave.value >= minFilter;
    } else if (maxFilter) {
      return nave.value <= maxFilter;
    } else {
      return nave;
    }
  })
  .sort((a,b)=>{
    if(ordination==='maisCaro'){
      return b.value - a.value
    }
    if(ordination==='maisBarato'){
      return a.value - b.value
    }
  }).map(nave => {
  return (
  <ProductCardStyle>    
    <ProductCardImage src={nave.imageUrl} alt= '{nave.name}'/>
    <ProductCardDetails>
      <p>{nave.name}</p>
      <p>Créditos:{nave.value}</p>
      <button onClick={()=>addCart(nave)}>Adicionar ao carrinho</button>
    </ProductCardDetails>
  </ProductCardStyle>)
})  
    



  return (
    <HomeStyle>
      <HomeHeader>
        <p>Quantidade de produtos: {props.productsList.length}</p>
        <label htmlFor='order'>Ordenação:</label>
        <select onChange={handleOrdination} name="order" id="order">
          <option value="maisCaro">Mais caros</option>
          <option value="maisBarato">Mais baratos</option>
        </select>
      </HomeHeader>
      <ProductCardShow>
        {renderProducts}
        
        </ProductCardShow>
        
      
    </HomeStyle>
    
    
    );
}

export default Home