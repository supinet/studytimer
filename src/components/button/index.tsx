import React from 'react';
import style from './button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode,
    onClick?: () => void
}

function Button({ onClick, type, children }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}>
            {children}
        </button>
    )
}

export default Button;