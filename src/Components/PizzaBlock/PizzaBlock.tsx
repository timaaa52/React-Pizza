import React, { useState } from 'react'
import { pizzasType } from '../../pages/Home';
import classNames from 'classnames';
import {Button} from "../Button/Button";
import {itemPizzaType} from "../../redux/reducers/cartReducer";


type PizzaBlockPropsType = {
    onAddPizza: (obj: itemPizzaType) => void
    addedPizzaCount: { items: Array<itemPizzaType> }
}


export const PizzaBlock: React.FC<PizzaBlockPropsType & pizzasType> = ({id, name, price, imageUrl, types, sizes, onAddPizza, addedPizzaCount }) => {
    const [activeItemType, setActiveItemType] = useState(types[0]);
    const [pizzaSizes, setPizzaSizes] = useState(sizes[0])
    const availablePizzaTypes = ['тонкое', 'традиционное'];
    const availablePizzaSizes = [26, 30, 40];

    const onAddPizzaHandler = () => {
        const pizza: itemPizzaType = {
            id,
            name,
            price,
            type: availablePizzaTypes[activeItemType],
            size: pizzaSizes,
        }
        onAddPizza(pizza)
    }


    return (


        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        availablePizzaTypes.map((type, i) => {
                            return <li
                                key={`${i}_${type}`}
                                className={classNames({
                                    'active': activeItemType === i,
                                    'disabled': !types.includes(i),
                                })}
                                onClick={() => setActiveItemType(i)}
                            >
                                {type}
                            </li>
                        })
                    }
                </ul>
                <ul>
                    {
                        availablePizzaSizes.map((size, i) => {
                            return <li
                                key={`${size}_${i}`}
                                className={classNames({
                                    'active': pizzaSizes === size,
                                    'disabled': !sizes.includes(size),
                                })}
                                onClick={ () => setPizzaSizes(size) }
                            >
                                {size} см.
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onClick={onAddPizzaHandler} className={'button--outline button--add'}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {
                        addedPizzaCount && <i>{addedPizzaCount.items.length}</i>
                    }

                </Button>
            </div>
        </div>   
    );
};
