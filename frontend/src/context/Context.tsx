import React, { useState, useEffect } from "react";
import PizzaProduct from "../models/model"

interface ProductPizzaContextProps {
    children: React.ReactNode
}

type ContextProductProps = {
    pizzas: PizzaProduct[]
    addPizza: (newPizza: PizzaProduct) => void
    editPizza: (newPizza: PizzaProduct) => void
    deletePizza: (id: number) => void
}

const defaultValue: ContextProductProps = {
    pizzas: [],
    addPizza() {},
    editPizza() {},
    deletePizza() {}
}

export const ContextProduct = React.createContext(defaultValue)
export const ProductPizzaContext: React.FC<ProductPizzaContextProps> = ({children}) => {
    const [pizzas, setPizzas] = useState<PizzaProduct[]>([])

    const addPizza = (newPizza: PizzaProduct) => {
        const newPizzas: PizzaProduct[] = [...pizzas, newPizza]
        setPizzas(newPizzas)

        localStorage.setItem('pizzasList', JSON.stringify(newPizzas))
    }
    const editPizza = (newPizza: PizzaProduct) => {
        const newPizzas: PizzaProduct[] = pizzas.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
        setPizzas(newPizzas)

        localStorage.setItem('pizzasList', JSON.stringify(newPizzas))
    }
    const deletePizza = (id: number): void => {
        const newPizzas = pizzas.filter((pizza) => pizza.id !== id)
        setPizzas(newPizzas)
        
        localStorage.setItem('pizzasList', JSON.stringify(newPizzas))
    }

    useEffect(() => {
        const pizzasState = localStorage.getItem('pizzasList')
        if (pizzasState) {
        setPizzas(JSON.parse(pizzasState))
        }
    }, [])

    return (
        <ContextProduct.Provider value={{
            pizzas,
            addPizza,
            editPizza,
            deletePizza
        }}>
            {children}
        </ContextProduct.Provider>
    )
}