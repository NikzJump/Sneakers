import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {
  const [allProducts, setAllProducts] = React.useState([])
  const [cartProducts, setCartProducts] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false) 
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  React.useEffect(() => {
    axios.get("https://66e34a13494df9a478e4db0d.mockapi.io/products").then(res => {
      setAllProducts(res.data)  
    })
  }, [])

  const onAddToCart = (element) => {
    for(let i = 0; i < cartProducts.length; i++){      
      if (element.name === cartProducts[i].name) {        
        return
      }
    }
    axios.post("https://66e34a13494df9a478e4db0d.mockapi.io/cart", element)
    
    axios.get("https://66e34a13494df9a478e4db0d.mockapi.io/cart").then(res => {
      setCartProducts(res.data)  
    })
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer cartProducts = {cartProducts} onCloseCart = {() => setCartOpened(false)}/>}
      <Header
        onClickCart = {() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}`: "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input value={searchValue} onChange={onChangeSearchInput} placeholder="Поиск" />
            {searchValue ? <img onClick={() => setSearchValue("")} className="remove-btn" src="./img/btn-remove.svg" alt="Remove" />: null}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {allProducts.filter(prod => prod.name.toLowerCase().includes(searchValue.toLowerCase())).map((element, index) => (
            <Card
              key={index}
              name={element.name}
              price={element.price}
              imgUrl={element.imgUrl}
              onPlus={() => {onAddToCart(element);
             }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
