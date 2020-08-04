import React from 'react';
//@ts-ignore
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
  return (
      <article className="teacher-item">
        <header>
            <img src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg" alt=""/>
            <div>
                <strong>Professor</strong>
                <span>Química</span>
            </div>
        </header>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br/><br/>
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