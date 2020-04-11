import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import api from '../../services/api'
import './styles.css'
import logoImg from '../../assets/logo.svg';

function Register() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	function handleRegister(e) {
		e.preventDefault()
	}

	return (
		<>
			<div className="register-container">
				<div className="content">
					<section>
						<img src={logoImg} alt="Be the Hero" />

						<h1>Cadastro</h1>
						<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar a sua ONG.</p>
						<Link className="back-link" to="/">
							<FiArrowLeft size={16} color='#E02041' />
              Não tenho cadastro
            </Link>
					</section>

					<form onSubmit={handleRegister}>
						<input
							type="text"
							placeholder="Nome da ONG"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input 
							type="text" 
							placeholder="email" 
							value={email}
							onChange={e => setEmail(e.target.value)}
							/>
						<input 
							type="text" 
							placeholder="Whatsapp"
							value={whatsapp}
							onChange={e => setWhatsapp(e.target.value)} 
							/>

						<div className="input-group">
							<input 
								type="text" 
								placeholder="Cidade"
								value={city}
								onChange={e => setCity(e.target.value)} 
								/>

							<input 
							type="text" 
							placeholder="UF" 
							style={{ width: 80 }} 
							value={uf}
							onChange={e => setUf(e.target.value)}/>
						</div>

						<button className="button" type="submit">Cadastrar</button>

					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
