import React from 'react';

import './styles.css';

import wpp from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://i.imgur.com/OYzjICc.png" alt="Ana Beatriz"/>
                <div>
                    <strong>Ana Beatriz</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Apaixonada por todo tipo de contas.
                <br/><br/>
                De exatas desde que nasci, mas às vezes fujo pro lado humano da coisa, querendo dar uma de psicóloga. Faz parte da vida.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={wpp} alt="Whatsapp"/> Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;