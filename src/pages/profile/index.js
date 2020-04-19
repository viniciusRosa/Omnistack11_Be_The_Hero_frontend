import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { Link } from 'react-router-dom';

function Profile() {

  const ongName = localStorage.getItem('ongName');


  return (
    <>
      <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be the hero"/>
            <span>Vem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button">
                <FiPower size={18} color="#E02041"/>
            </button>
        </header>
        <h1>Casos cadastrados</h1>

        <ul>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÂO:</strong>
                <p>Descrição teste</p>

                <strong>Valor:</strong>
                <p>R$ 120,00</p>

                <button type='button'>
                    <FiTrash2 size={20} color='#a8a8b3' />
                </button>
            </li>

            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÂO:</strong>
                <p>Descrição teste</p>

                <strong>Valor:</strong>
                <p>R$ 120,00</p>

                <button type='button'>
                    <FiTrash2 size={20} color='#a8a8b3' />
                </button>
            </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
