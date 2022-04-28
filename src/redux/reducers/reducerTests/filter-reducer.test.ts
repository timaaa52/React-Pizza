import { setCategoryAC, setSortByAC } from "../../actions/fiterActions";
import { filterReducer, stateType } from "../filterReducer";

test('change category should be completed', () => {

    const startState: stateType = {
        category: null,
        sortBy: 'rating'
    }

    let action = setCategoryAC(2);

    let endState = filterReducer(startState, action);

    expect(endState.category).toBe(2);
    expect(endState.sortBy).toBe('rating');
});

test('change sortBy should be completed', () => {

    const startState: stateType = {
        category: null,
        sortBy: 'rating'
    }

    let action = setSortByAC('price');

    let endState = filterReducer(startState, action);

    expect(endState.category).toBe(null);
    expect(endState.sortBy).toBe('price');
})



export default test;