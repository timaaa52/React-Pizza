import { pizzasType } from "../../pages/Home";

export const SET_PIZZAS = 'SET_PIZZAS';

export type setPizzasACType = {
    type: 'SET_PIZZAS',
    payload: {
        items: Array<pizzasType>
    }
}
export const setPizzasAC = (items: Array<pizzasType>): setPizzasACType => {
    return {
        type: 'SET_PIZZAS',
        payload: {
            items,
        }
    }
}