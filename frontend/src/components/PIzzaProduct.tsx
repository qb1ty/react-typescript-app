import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ContextProduct } from "../context/Context";
import PizzaProduct from "../models/model";
import EditForm from "./EditForm";

interface PizzaProductionProps {
    pizza: PizzaProduct
}

const PizzaProduction: React.FC<PizzaProductionProps> = ({ pizza }) => {
    const { deletePizza } = useContext(ContextProduct)
    const [edit, setEdit] = useState<boolean>(false)

    const editClose = (): void => {
        setEdit(false)
    }

    return (
        <div className="pizza">
            
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>
                <Link to={`/pizza/${pizza.id}`}>
                    {pizza.title}
                </Link>
            </h2>
            <span>{pizza.price} ₸</span>

            <div className="pizza-controls">
                <AiFillEdit onClick={() => setEdit(true)}/>
                <AiFillDelete onClick={() => deletePizza(pizza.id)}/>
            </div>

            {
                edit ? <EditForm data={pizza} editClose={editClose}/> : null
            }

        </div>
    )
}

export default PizzaProduction