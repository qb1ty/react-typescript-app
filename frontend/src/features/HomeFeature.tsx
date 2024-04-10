import React from "react";
import AddPizzaForm from "../components/PizzaAddForm";
import DisplayPizza from "../components/PizzaDisplay";

const HomeFeature: React.FC = () => {
    return (
        <div className='App'>
          <div className='wrap'>
            <span className='heading'>Наша пиццерия!</span>
            <AddPizzaForm />
            <DisplayPizza />
          </div>
        </div>
    )
}

export default HomeFeature