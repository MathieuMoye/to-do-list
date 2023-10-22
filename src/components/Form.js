import React, { useState } from 'react';


export const Form = () => {
    const [text, setText] = useState("Que faire aujourd'hui ?")
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         <button>Envoyer</button>
        </form>
        
    )
}