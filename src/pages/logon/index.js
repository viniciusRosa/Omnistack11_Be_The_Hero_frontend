import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {
  return (
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} alt="logo" />

          <form action="">
            <h1>Faça seu login</h1>
            <input placeholder="Sua Id" />
            <button className='button' type='submit'>Entrar</button>

            <a href="/register">
              <FiLogIn size={16} color='#E02041' />
              Não tenho cadastro
            </a>
          </form>
        </section>
        <img src={heroesImg} alt="heroesimage" />
      </div>
    </>
  );
}

export default Logon;
