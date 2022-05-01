import React from "react";
import { Categories, PizzaBlock, SortPopup } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryAC } from "../redux/actions/fiterActions";
import { rootReducerType } from "../redux/store";
import { itemsSortType } from "../Components/SortPopup/SortPopup";
import PizzaLoaded from "../Components/PizzaBlock/PizzaLoaded";
import { sortByType } from "../redux/reducers/filterReducer";
import { fetchPizzasTC } from "../redux/reducers/pizzasReducer";
import { useEffect } from "react";
import {addPizzaToCartAC} from "../redux/actions/cartActions";
import {itemPizzaType} from "../redux/reducers/cartReducer";

export type pizzasType = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

type ss = {
  pizzas: Array<pizzasType>;
  category: null | number;
  isLoaded: boolean;
  sortBy: sortByType
  cartItems: {
    [key: string]: Array<itemPizzaType>
  }
};

const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems: Array<itemsSortType> = [
  { name: "популярности", sortBy: "rating" },
  { name: "цене", sortBy: "price" },
  { name: "алфавиту", sortBy: "name" },
];

export const Home = () => {
  const dispatch = useDispatch();

  // const category = useSelector<rootReducerType, number | null>(state => state.filters.category);
  // const pizzas = useSelector<rootReducerType, Array<pizzasType>>(state => state.pizzas.items);
  const { pizzas, category, isLoaded, sortBy, cartItems } = useSelector<rootReducerType, ss>(
    ({ pizzas, filters, cart }) => {
      return {
        pizzas: pizzas.items,
        isLoaded: pizzas.isLoading,
        category: filters.category,
        sortBy: filters.sortBy,
        cartItems: cart.items
      };
    }
  );

  useEffect(() => {
    dispatch(fetchPizzasTC(category, sortBy));
  }, [category, sortBy]);

  const selectPizzaCategory = React.useCallback(
    function selectPizzaCategory(item: number | null) {
      dispatch(setCategoryAC(item));
    },
    [dispatch]
  );


  // func для добавление пиццы в редьюсер корзины
  const onAddPizzaToCard = (item: itemPizzaType) => {
    dispatch(addPizzaToCartAC(item))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={items}
          selectItem={selectPizzaCategory}
          selectedItem={category}
        />
        <SortPopup nameOfSort={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((el) => {
              return <PizzaBlock key={el.id} onAddPizza={onAddPizzaToCard} addedPizzaCount={cartItems[el.id]} {...el}  />;
              // создаем массив из 10 элементов, и заполняем его компонентами предзагрузки пицц
            })
          : Array(10).fill(<PizzaLoaded />)}
      </div>
    </div>
  );
};
