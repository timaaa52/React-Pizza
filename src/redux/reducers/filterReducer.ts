import {setCategoryType, setSortByType} from "../actions/fiterActions"

export type sortByType = 'rating' | 'price' | 'name';

export type stateType = {
    category: null | number
    sortBy: sortByType
}
const initialState: stateType = {
    category: null,
    sortBy: 'rating'
}

export const filterReducer = (state: stateType = initialState, action: generalType): stateType => {
    switch (action.type) {
        case 'SET_CATEGORY':
        case 'SET_SORT_BY' :
            return { ...state, ...action.payload };
        default: return state;
    }
}


type generalType = setSortByType | setCategoryType;
