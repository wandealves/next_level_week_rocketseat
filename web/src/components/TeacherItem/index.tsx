import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/3501534?s=460&u=68ff12d9f38089eee509fafd138fcf5879d66095&v=4"
          alt="Robo"
        ></img>
        <div>
          <strong>Professor Nome</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada. Apaixonado
        <br />
        <br />
        por explodir coisas em laboratório e por mudar a vida das pessoas
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
