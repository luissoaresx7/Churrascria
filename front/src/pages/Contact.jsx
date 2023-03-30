import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/contact.css";

const Contact = () => {

  function feed() {
    alert('Agradecemos seu Feedback')
  }

  return (

  <div className='contatos' >
    <h1 className='formtitle'>Fale Conosco:</h1>
    <form className="formMsg" action='/Home.jsx'>
      <input 
        className='caixaform w-100'
        type="text" 
        name="nome" 
        placeholder='Nome' />
    
      <input 
 
        className='caixaform w-100'
        type="telefone" 
        name="telefone"  
        placeholder='(xx) XXXXX-XXXX' />
      
      <input 
        className='caixaform w-100'
        type="email" 
        name="email" 
        placeholder='seuemail@provedor.com' />
      
      <textarea 
        className='caixaform w-100' 
        name="mensagem" 
        id="mensagem" 
        placeholder='Escreva para nossa equipe'></textarea>

</form>
      
      <button 
        className='buttonform' 
        type="submit" 
        name="submit" 
        id="submit" 
        value="Enviar" 
        placeholder='Enviar' >
        <Link to='/Home.jsx' onClick={feed}>
        Enviar</Link>
        </button>
      
    
  </div>

) }

export default Contact
