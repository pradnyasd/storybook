import React from "react";
import './Button.css';

const Button = props => <div className={props.myclass}>{props.label}</div>;

export default Button;