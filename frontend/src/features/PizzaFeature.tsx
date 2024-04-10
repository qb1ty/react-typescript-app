import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PizzaProduct from "../models/model"

const PizzaFeature: React.FC = () => {
    const [pizza, setPizza] = useState<PizzaProduct | null>(null)
    const { id } = useParams()

    useEffect(() => {
        const pizzasList = localStorage.getItem('pizzasList')

        if (pizzasList && id) {
            const pizzaList = JSON.parse(pizzasList)
            const searchId = parseInt(id)
            const newPizza = pizzaList.find((pizza: PizzaProduct) => pizza.id === searchId)
            setPizza(newPizza)
        }
    }, [id])
    
    return (
        <>
            <span className="heading">Вааш пицца</span>
            <div className="pizza pizza-page">
                <img src={`/images/${pizza?.img}`} alt={pizza?.title} />
                <h2>{pizza?.title}</h2>
                <span>{pizza?.price} ₸</span>

                <p>Лучшая в мире!</p>
            </div>
        </>
    )
}

export default PizzaFeature