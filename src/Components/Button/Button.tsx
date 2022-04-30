import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classNames from 'classnames';

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


type ButtonPropsType = DefaultButtonProps & {
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({children, className, onClick}) => {
    return (
        <button
            className={classNames('button', className, { })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
