function App() {
  return (
    <div className="wrapper clear">
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
            <img height={12} width={18} src="/img/cart.png" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img height={18} width={18} src="/img/profile.png" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img width={156} height={112} src="./img/sneakers/sneakers1.png" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={156} height={112} src="./img/sneakers/sneakers2.png" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={156} height={112} src="./img/sneakers/sneakers3.png" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={156} height={112} src="./img/sneakers/sneakers4.png" alt="" />
            <h5>Кроссовки 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
