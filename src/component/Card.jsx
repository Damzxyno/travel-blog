import React from 'react'
import "./css/cards.css"
import CardItem from './CardItem'
import data from "../data"

function Card() {
  return (
    <div  className="cards">
        <h1>Check out these nice destinations!</h1>
        <div className="card__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                 {data.map(item => <CardItem items={item} key = {item.id}/>)}
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Card