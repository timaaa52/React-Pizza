import React, { useState, useEffect} from 'react'
import { Categories, SortPopup, PizzaBlock} from '../Components';
import axios from "axios";


export type pizzasType = {
    id: number
    imageUrl: string
    name: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

export function Home() {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [pizzas, setPizzas] = useState<Array<pizzasType>>([])
    
    useEffect(() => {
       axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas)
       );
    }, [])

    function selectPizzaCategory(item: number | null) {
        setSelectedItem(item)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    selectItem={selectPizzaCategory}
                    selectedItem={selectedItem}
                />
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas.map(el => 
                        {
                           return <PizzaBlock key={el.id} {...el} /> 
                        }
                        )
                }
            </div>
        </div>
    )
}
