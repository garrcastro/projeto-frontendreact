import {FiltersStyle} from './styled'


const Filters = (props) => {
  const {minFilter, maxFilter, handleMinFilter, handleMaxFilter, searchFilter, handleSearchFilter, } = props
  
    return (
      <FiltersStyle>

          <h1>Filtro</h1>
          <label htmlFor='minValue'>Valor Mínimo:</label>
          <input type='text' id='minValue' name='minValue' value={minFilter} onChange={handleMinFilter}></input>
          <label htmlFor='maxValue'>Valor Máximo:</label>
          <input type='text' id='maxValue' name='maxValue' value={maxFilter} onChange={handleMaxFilter}></input>
          <label htmlFor='nameSearch'>Busca por Nome:</label>
          <input type='text' id='nameSearch' name='nameSearch' value={searchFilter} onChange={handleSearchFilter}></input>
      </FiltersStyle>
        
      
    );
}

export default Filters