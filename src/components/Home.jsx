import React from 'react';
import Titulo from './Titulo';
import FormularioCadastrar from './FormularioCadastrar';

function Home() {
  return (
    <div>
      <div className="container">
        <Titulo titulo="Bem vindo ao app de contatos" />

        <FormularioCadastrar
            tipo="text"
            placeholder="Digite seu nome"
        />
      </div>
    </div>
  );
}

export default Home;