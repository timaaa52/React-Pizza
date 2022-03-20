import React, {RefObject, useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setSortByAC } from '../../redux/actions/fiterActions';
import { sortByType } from '../../redux/reducers/filterReducer';

export type itemsSortType = {
    name: string
    sortBy: sortByType
}

type SortPopupPropsType = {
    nameOfSort: Array<itemsSortType>
}

export const SortPopup: React.FC<SortPopupPropsType> = ({nameOfSort}) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const sortRef = useRef() as RefObject<HTMLDivElement>;
    const dispatch = useDispatch<Dispatch>()
    
    useEffect(() => {
        document.body.addEventListener('click', clickOutSide);
    }, [])

    const clickOutSide = (e: MouseEvent) => {
        //@ts-ignore
        if (!e.composedPath().includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }

    const changeSortElement = (id: number, sortBy: sortByType) => {
        setActiveItem(id);
        dispatch(setSortByAC(sortBy));
        setVisiblePopup(false)
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{nameOfSort[activeItem].name}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
                <ul>
                    {
                        nameOfSort.map((el, i) => <li
                                className={activeItem === i ? 'active' : ''}
                                key={`${el}_${i}`}
                                onClick={() => changeSortElement(i, el.sortBy)}
                            >
                                {el.name}
                            </li>
                        )
                    }
                </ul>
            </div>}
        </div>
    );
};