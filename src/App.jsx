import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {name: "Кроссовки 1", price: "12 999 руб.", imgUrl: "./img/sneakers/1.jpg"},
  {name: "Кроссовки 2", price: "13 499 руб.", imgUrl: "./img/sneakers/2.jpg"},
  {name: "Кроссовки 3", price: "16 999 руб.", imgUrl: "./img/sneakers/3.jpg"},
  {name: "Кроссовки 4", price: "11 999 руб.", imgUrl: "./img/sneakers/4.jpg"}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          {arr.map(sneak => (
            <Card
             name={sneak.name}
             price={sneak.price}
             imgUrl={sneak.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
