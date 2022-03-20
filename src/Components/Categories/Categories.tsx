import React from 'react';


type CategoriesPropsType = {
    items?: Array<string>
    selectItem: (item: number | null) => void
    selectedItem: number | null
}


export const Categories: React.FC<CategoriesPropsType> = ({items, selectItem, selectedItem}) => {

    return (
        <div className="categories">
            <ul>
                <li className={selectedItem === null ? 'active' : ''} onClick={() => selectItem(null)}>Все</li>
                {items && items.map((el, i) =>
                    <li
                        className={selectedItem === i ? 'active' : ''}
                        onClick={() => selectItem(i)}
                        key={`${el}_${i}`}
                    >
                        {el}
                    </li>
                )}
            </ul>
        </div>
    );
};
