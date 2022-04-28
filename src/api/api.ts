import axios, { AxiosResponse } from "axios"
import { pizzasType } from "../pages/Home"

const instance = axios.create({
    baseURL: 'http://localhost:3001'
})


export const pizzasApi = {
    getPizzas() {
        return instance.get<pizzasType[]>(`http://localhost:3001/pizzas`)
    },
    setPizzasCategoty(category: number){
        return instance.get<pizzasType[]>(`http://localhost:3001/pizzas?category=${category}`)
    },
    setPizzasFilterByName(filter: string){
        return instance.get<pizzasType[]>(`http://localhost:3001/pizzas?_order=asc&_sort=${filter}`)
    },
    setPizzasFilterByRating(filter: string){
        return instance.get<pizzasType[]>(`http://localhost:3001/pizzas?_order=desc&_sort=${filter}`)
    },
    setPizzasFilterByPrice(filter: string){
        return instance.get<pizzasType[]>(`http://localhost:3001/pizzas?_order=desc&_sort=${filter}`)
    },
}

