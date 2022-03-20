import { setCategoryType, setSortByType } from "../actions/fiterActions"

export type sortByType = 'popular' | 'price' | 'alphabet';

export type stateType = {
    category: null | number
    sortBy: sortByType
}
const initialState: stateType = {
    category: null,
    sortBy: 'popular'
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