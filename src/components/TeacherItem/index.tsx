import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
  return (
      <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/54816806?s=460&u=e00582aafaa32daf5330d589c1cd220af5a9be1c&v=4" alt=""/>
            <div>
                <strong>Fabiano Reis </strong>
                <span>Quimica</span>
            </div>
        </header>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br/>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80.00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="Entrar em contato"/>
                Entrar em contato
            </button>
        </footer>
      </article>
  )
}

export default TeacherItem;
