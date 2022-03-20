import { sortByType } from "../reducers/filterReducer";

const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';


export type setSortByType = {
    type: 'SET_SORT_BY',
    payload: {
        sortBy: sortByType
    }
}
export const setSortByAC = (sortBy: sortByType): setSortByType => {
    return {
        type: SET_SORT_BY,
        payload: {
            sortBy,
        }
    }
};

export type setCategoryType = {
    type: 'SET_CATEGORY',
    payload: {
        category: number | null
    }
}
export const setCategoryAC = (category: number | null): setCategoryType => {
    return {
        type: SET_CATEGORY, 
        payload: {
            category,
        }
    }
}