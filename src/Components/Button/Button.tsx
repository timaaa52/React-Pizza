import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classNames from 'classnames';

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


type ButtonPropsType = DefaultButtonProps & {
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({children, className}) => {
    return (
        <button
            className={classNames('button', className, { })}
        >
            {children}
        </button>
    );
};
