import axios from "axios"
import { sortByType } from "../redux/reducers/filterReducer"

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})


export const pizzasApi = {
    getPizzas(category: number | null, sortBy: sortByType) {
            return instance.get(`/pizzas?${ category !== null ? `category=${category}`: ''}&_sort=${sortBy}&_order=${sortBy === 'name' ? 'asc' : 'desc'}`)
    },
}

