import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

//este input aceita todas as propiedades passadas a ele sem ter de colocar tudo a mao
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string;
  label: string;
}


const Textarea: React.FC<TextareaProps>= ({label, name, ...rest}) => {
  return(
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  );
}

export default Textarea;