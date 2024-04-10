import React, { ChangeEvent, FormEvent, useContext, useState } from "react"
import { ContextProduct } from "../context/Context"
import PizzaProduct from "../models/model"

interface EditFormProps {
    data: PizzaProduct
    editClose: () => void
}

const EditForm: React.FC<EditFormProps> = ({ data, editClose }) => {
    const { editPizza } = useContext(ContextProduct)
    const [editNewPizza, setEditNewPizza] = useState<PizzaProduct>(data)

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target

        setEditNewPizza({
            ...editNewPizza,
            [name]: value
        })
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault()
        const { title, price, img } = editNewPizza

        if (title.trim() && price && img.trim()) {
            editPizza(editNewPizza)
            editClose()
        }
    }

    return (
        <form
            className="edit-form"
            onSubmit={handleSubmit}
        >
            <input 
                name="title"
                type="text"
                placeholder="Название"
                value={editNewPizza.title}
                onChange={handleChange}
            />
            <input 
                name="price"
                type="number"
                placeholder="Цена"
                value={editNewPizza.price}
                onChange={handleChange}
            />
            <input 
                name="img"
                type="text"
                placeholder="Изоброжение"
                value={editNewPizza.img}
                onChange={handleChange}
            />
            <button type="submit">Подтвердить</button>
        </form>
    )
}

export default EditForm