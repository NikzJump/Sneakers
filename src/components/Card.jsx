import React from "react";

var likedStatus = false

function Card({name, price, imgUrl}) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="./img/heart.svg" alt="Unliked" />
            </div>
            <img width={125} height={112} src={imgUrl} alt="" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
            </div>
            <button className="button" onClick={() => likedStatus = true}>
                <img width={11} height={11} src={likedStatus === false ? "./img/plus.svg": "./img/liked.svg"} alt="Plus" />
            </button>
        </div>
      </div>
    )
}

export default Card