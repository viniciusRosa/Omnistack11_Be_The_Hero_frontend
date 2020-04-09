import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Register() {
	return (
		<>
			<div className="register-container">
				<div className="content">
					<section>
						<img src={logoImg} alt="Be the Hero"/>

						<h1>Cadastro</h1>
						<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar a sua ONG.</p>
						<Link className="back-link" to="/">
              <FiArrowLeft size={16} color='#E02041' />
              Não tenho cadastro
            </Link>
					</section>

					<form action="">
						<input type="text" placeholder="Nome da ONG"/>
						<input type="text" placeholder="email"/>
						<input type="text" placeholder="UF"/>

						<div className="input-group">
							<input type="text" placeholder="Cidade"/>
							<input type="text" placeholder="UF" style={{ width: 80 }}/>
						</div>

						<button className="button" type="submit">Cadastrar</button>

					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
