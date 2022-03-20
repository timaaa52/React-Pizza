import React, {useEffect} from 'react'
import { Categories, SortPopup, PizzaBlock} from '../Components';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {setCategoryAC } from '../redux/actions/fiterActions';
import { rootReducerType } from '../redux/store';
import { setPizzasAC } from '../redux/actions/pizzasActions';

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

type ss = {
    pizzas: Array<pizzasType>
    category: null | number
}


export const Home = () => {
    const dispatch = useDispatch<Dispatch>();
    // const category = useSelector<rootReducerType, number | null>(state => state.filters.category);
    // const pizzas = useSelector<rootReducerType, Array<pizzasType>>(state => state.pizzas.items);
    const {pizzas, category} = useSelector<rootReducerType, ss>(({pizzas, filters}) => {
        return {
            pizzas: pizzas.items,
            category: filters.category,
        }
    })
    useEffect(() => {
       axios.get('http://localhost:3000/db.json').then(({data}) => dispatch(setPizzasAC(data.pizzas))
       );
    }, [])

    function selectPizzaCategory(item: number | null) {
        dispatch(setCategoryAC(item))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    selectItem={selectPizzaCategory}
                    selectedItem={category}
                />
                <SortPopup nameOfSort={[{name: 'популярности', sortBy: 'popular'}, 
                {name: 'цене', sortBy: 'price'}, 
                {name: 'алфавиту', sortBy: 'alphabet'}]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                   pizzas && pizzas.map(el => 
                        {
                           return <PizzaBlock key={el.id} {...el} /> 
                        }
                        )
                }
            </div>
        </div>
    )
};