import React from "react";

function Card() {
    return (
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
    )
}

export default Card