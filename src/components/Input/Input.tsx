import React from 'react';
import './Input.css'

const Input = (props: any) => {
    return <input type ={props.type} className = {props.className}/>
};

export default Input;