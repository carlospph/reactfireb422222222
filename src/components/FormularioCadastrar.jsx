import React from 'react';

import { useState } from 'react';

function FormularioCadastrar({ tipo, placeholder }) {

  const [nome, setNome] = useState('');


  function handleClickValidar(e) {
    e.preventDefault();
    validar();
  }

  const validar = () => {
    if(!nome){
      alert('Preencha o nome');
      return false;
    }
    else{
      alert("Cadastrado com sucesso!")
     setNome('')
      return true;
    }
  }

  return (
    <div>
      <div className="container">
        <form>
          <input type={tipo}
            placeholder={placeholder}
            className='p-2 py-3 w-full border-round-lg border-1'
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />

          <button type="submit"
            className='p-3 px-5 border-none mt-3 border-round-lg cursor-pointer'
            onClick={handleClickValidar}
          >
            Cadastre-se
          </button>
        </form>

        {/* <p>Nome: {nome}</p> */}

      </div>
    </div>
  );
}

export default FormularioCadastrar;