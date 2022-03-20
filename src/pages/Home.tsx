import React, { useState, useEffect} from 'react'
import { Categories, SortPopup, PizzaBlock} from '../Components';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {setCategoryAC } from '../redux/actions/fiterActions';
import { rootReducerType } from '../redux/store';
import { connect } from 'react-redux';
import { stateType } from '../redux/reducers/filterReducer';


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


export const Home = () => {
    // const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [pizzas, setPizzas] = useState<Array<pizzasType>>([])
    const dispatch = useDispatch<Dispatch>();
    const category = useSelector<rootReducerType, number | null>(state => state.filters.category);
    useEffect(() => {
       axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas)
       );
    }, [])

    function selectPizzaCategory(item: number | null) {
        // setSelectedItem(item);
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