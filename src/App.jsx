import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {
  const [allProducts, setAllProducts] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false) 

  React.useEffect(() => {
    fetch("https://66e34a13494df9a478e4db0d.mockapi.io/products").then(res => {
      return res.json();
    }).then(data => {
      setAllProducts(data)    
    })
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCloseCart = {() => setCartOpened(false)}/>}
      <Header
        onClickCart = {() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {allProducts.map(element => (
            <Card
             name={element.name}
             price={element.price}
             imgUrl={element.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
