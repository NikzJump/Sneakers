import React from "react";

function Header({onClickCart}) {
    
    return (
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
          <li onClick={onClickCart} className="mr-30 cu-p">
            <img height={12} width={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img height={18} width={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
    )
}

export default Header