import React, { useState } from 'react';


export const Form = ({ nextId, addTask }) => {
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // pas besoin de récupérer la valeur du champ nommé "id"
        // on utilise directement la valeur de nextId
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
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='text' 
            value={text}
            placeholder="Ton programme du jour"
            onChange={(e) => setText(e.target.value)}
         />
         <button>Envoyer</button>
        </form>
    )
}
