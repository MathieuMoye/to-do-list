import { useState } from 'react'
import './styles.css'

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

const Form = () => {
    const [inputValue, setInputValue] = useState("Que faire aujourd'hui ?")
            return(

                 <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
              <input onChange={(e) => setInputValue(e.target.value)} className='form-input' type='text' name='my_input' value={inputValue} />
                <button className='form-button'>Envoyer</button>
            </form>
       
        </div>
            )
}

export default Form;