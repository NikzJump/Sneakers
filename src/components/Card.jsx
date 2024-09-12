import React from "react";

function Card({name, price, imgUrl}) {
    const [isAdded, setIsAdded] = React.useState(false)

    const ClickPlus = () => {
        setIsAdded(!isAdded)        
    }
    

    return (
        <div className="card">
            <div className="favorite">
                <img src="./img/heart.svg" alt="Unliked"/>
            </div>
            <img width={125} height={112} src={imgUrl} alt="" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
            </div>
                <img className="imgPlus" onClick={ClickPlus} src={isAdded ===false ? "./img/btn-plus.svg": "./img/btn-checked.svg"} alt="Plus" />
        </div>
      </div>
    )
}

export default Card