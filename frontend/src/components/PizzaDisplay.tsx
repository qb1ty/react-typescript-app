import React, { useContext } from "react";
import { ContextProduct } from "../context/Context";
import PizzaProduction from "./PIzzaProduct";

const DisplayPizza: React.FC = () => {
    const { pizzas } = useContext(ContextProduct)

    return (
        <div className="container">
            {pizzas.map((pizza) => {
                return <PizzaProduction pizza={pizza} key={pizza.id}/>
            })}
        </div>
    )
}

export default DisplayPizza