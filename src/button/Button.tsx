import React from 'react';
import b from './Button.module.css';

type ButtonPropsType = {
    name: string
    onClick: ()=>void
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler =()=>{
        props.onClick()
    }

    return (
        <button onClick={onClickHandler} className={b.button}>
            {props.name}
        </button>
    );
};
