import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ContextProduct } from "../context/Context";
import "./styles.css"

type InitialState = {
    id: number
    title: string
    price: string | number
    img: string
}

const AddPizzaForm: React.FC = () => {
    const { addPizza } = useContext(ContextProduct)

    const initState: InitialState = {
        id: 0,
        title: '',
        price: 0,
        img: ''
    }
    const [pizza, setPizza] = useState<InitialState>(initState)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPizza({
            ...pizza,
            [name]: value,
        })
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setPizza(initState)
        const { title, price, img } = pizza

        if (title && price && img) {
            addPizza({
                title,
                img,
                price: +price,
                id: Date.now()
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="title"
                type="text"
                placeholder="Название"
                value={pizza.title}
                onChange={handleChange}
            />
            <input 
                name="price"
                type="number"
                placeholder="Цена"
                value={pizza.price}
                onChange={handleChange}
            />
            <input 
                name="img"
                type="text"
                placeholder="Изоброжение"
                value={pizza.img}
                onChange={handleChange}
            />
            <button type="submit">+ Добавить</button>
        </form>
    )
}

export default AddPizzaForm