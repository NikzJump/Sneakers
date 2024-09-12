import React from "react";

function Drawer({onCloseCart}) {
    return(
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between">
                    Корзина
                    <img onClick={onCloseCart} className="remove-btn" src="./img/btn-remove.svg" alt="Close" />
                </h2>
                <div className="items">
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
                    <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div>

                            </div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог: 5%</span>
                            <div>

                            </div>
                            <b>1074 руб.</b>
                        </li>
                        <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer