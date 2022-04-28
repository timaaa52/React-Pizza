import { pizzasType } from "../../pages/Home";

export const SET_PIZZAS = 'SET_PIZZAS';

export type setPizzasACType = {
    type: 'SET_PIZZAS',
    payload: {
        items: Array<pizzasType>
    }
}
export type setPizzasLoadingACType = {
    type: 'SET_PIZZAS_LOADING',
    payload: {
        status: boolean
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

export const setPizzasLoadingAC = (status: boolean) => {
    return {
        type: 'SET_PIZZAS_LOADING',
        payload: {
            status
        }
    }
}