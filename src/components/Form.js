import React, { useState } from 'react';
import '../styles/Form.css';

export const Form = ({ nextId, addTask, appStyle }) => {
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim() !== '') {
          const newValue = {
            id: nextId, 
            text: text
        }
           addTask(newValue)
           setText('')  
        } else {
            alert("Merci d'entrer une tâche !")
        }

        };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input 
            autocomplete="off"
            className='form-input'
            type='text'
            name='text' 
            value={text}
            placeholder="Ton programme du jour"
            onChange={(e) => setText(e.target.value)}
         />
         <button className='form-button'>➕</button>
        </form>
    )
}
