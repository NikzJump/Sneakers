function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="cart-item d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(./img/sneakers/1.jpg)'}} className="cart-item-img">

            </div>
            <div className="m-20">
              <p className="mb-5">Кроссовки 1</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="./img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(./img/sneakers/2.jpg)'}} className="cart-item-img">

            </div>
            <div className="m-20">
              <p className="mb-5">Кроссовки 2</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="./img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img height={40} width={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">
              React Sneakers
            </h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img height={12} width={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img height={18} width={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
            <img src="./img/heart.svg" alt="Unliked" />
            </div>
            <img width={125} height={112} src="./img/sneakers/1.jpg" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={125} height={112} src="./img/sneakers/2.jpg" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={125} height={112} src="./img/sneakers/3.jpg" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={125} height={112} src="./img/sneakers/4.jpg" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
