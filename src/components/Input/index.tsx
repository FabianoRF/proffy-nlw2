import React, { InputHTMLAttributes } from 'react';

import './styles.css';

//este input aceita todas as propiedades passadas a ele sem ter de colocar tudo a mao
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
}


const Input: React.FC<InputProps>= ({label, name, ...rest}) => {
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
}

export default Input;