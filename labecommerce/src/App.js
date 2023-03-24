import React, { useState } from 'react';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components';
import { productsList } from './Assets/productsList';

const Principal = styled.section`
  display: flex;
  justify-content: space-between;
`

function App() {
  const [minFilter,setMinFilter] = useState(0)
  const [maxFilter,setMaxFilter] = useState(100000000000)

  const handleMinFilter = (event) => setMinFilter(event.target.value)
  const handleMaxFilter = (event) => setMaxFilter(event.target.value)

  const [cart,setCart] = useState([])

  const [amount,setAmount] = useState(0)

  const [searchFilter, setSearchFilter] = useState('')
  const handleSearchFilter = (event) => {setSearchFilter(event.target.value)}
  
  const [ordination, setOrdination] = useState('')
  const handleOrdination = (event) => {setOrdination(event.target.value)}
  return (
    <Principal>
      <GlobalStyles/>
      <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} handleMinFilter={handleMinFilter} handleMaxFilter={handleMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter} handleSearchFilter={handleSearchFilter} ordination={ordination} handleOrdination={handleOrdination}/>
      <Home productsList={productsList} amount={amount} setAmount={setAmount} cart={cart} setCart={setCart} searchFilter={searchFilter}
       setSearchFilter={setSearchFilter} handleSearchFilter={handleSearchFilter} ordination={ordination} handleOrdination={handleOrdination} minFilter={minFilter} maxFilter={maxFilter} >
      </Home>

      <Cart amount={amount} setAmount={setAmount} cart={cart} setCart={setCart}/>
    </Principal>
  );
}

export default App;
