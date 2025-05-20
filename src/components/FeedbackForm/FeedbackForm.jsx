import './FeedbackForm.css';
import { useState } from 'react';

const FeedbackForm = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');


    // inibindo o envio do formulário 
    function handleClickValidateFormulario(event) {
        event.preventDefault();

        if (nome === '' || email === '' || comentario === '') {
            alert('Preencha todos os campos');
            return;
        }

        else if (nome.length < 10) {
            alert('O nome deve ter no mínimo 10 caracteres e no máximo 20');
            return;
        }

        else if (email.length < 10) {
            alert('O email deve ter no mínimo 10 caracteres');
            return;
        }


        else if (comentario.length < 10 || comentario.length > 200) {
            alert('O comentário deve ter no mínimo 20 caracteres e no máximo 200');
            return;
        }

        else{
            alert(`Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);
        }
    }



    return (
        <div className="container-form">

            <div className='container__form--image'>
                <img src="https://github.com/carlospph/tech/blob/main/meninaEmail.png?raw=true" alt="Imagem lateral ao formulário, uma mulher e um envelope gigante" />
            </div>

            <form action="" onSubmit={handleClickValidateFormulario}>
                <div className='container__form--fields'>
                    <h2 className='title__section'>Feedback</h2>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        placeholder="Nome"
                        onChange={e => setNome(e.target.value)}
                    />

                    <label htmlFor="nome">Email</label>
                    <input type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="nome">Comentário</label>
                    <textarea name="comentario"
                        placeholder="Comentário"
                        onChange={e => setComentario(e.target.value)}></textarea>
                    <button type="submit" onClick={handleClickValidateFormulario} className='btn-form'>
                        Comentar
                    </button>
                </div>
            </form>
        </div>
    )
}
export default FeedbackForm;