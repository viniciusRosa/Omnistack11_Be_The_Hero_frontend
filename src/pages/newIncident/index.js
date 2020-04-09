import React from 'react';
import { FiArrowLeft  } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { Link } from 'react-router-dom';

function NewIncident() {
	return (
		<>
			<div className="new-incident-container">
				<div className="content">
					<section>
						<img src={logoImg} alt="Be the Hero" />

						<h1>Cadastrar novo caso</h1>
						<p>Descreva o caso.</p>
						<Link className="back-link" to="/profile">
							<FiArrowLeft size={16} color='#E02041' />
              voltar para a home
            </Link>
					</section>

					<form action="">
						<input type="text" placeholder="Título do caso" />
						<textarea placeholder="Descrição" />
						<input type="text" placeholder="valor" />

					

						<button className="button" type="submit">Cadastrar</button>

					</form>
				</div>
			</div>
		</>
	);
}

export default NewIncident;
