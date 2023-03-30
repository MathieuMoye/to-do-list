import './styles.css'

const Form = () => {
    return (
        <div className='form-container'>
            <form className='form'>
        <input className='form-input' type='text' value="Qu'as tu à faire aujourd'hui ?" />
        <button className='form-button'>Envoyer</button>
            </form>
       
        </div>
      

    )
}

export default Form;