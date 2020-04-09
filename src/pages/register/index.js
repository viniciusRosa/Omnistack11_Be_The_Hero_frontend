import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

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
					</section>

					<form action="">

					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
