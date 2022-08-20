import { useState } from 'react';
import './App.css';

   
  function App() {

           
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) =>{
   
    const {name, value} = e.target;

    setFormValues({...formValues, [name]: value});
   
   }


    const handleSubmit = (e) =>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData)

      console.log('***handleSubmit', data);
    };

    
    return (
             
         <form onSubmit = {handleSubmit}>
           <div className="container">
            <h1>CADASTRO DEV</h1>
            <input class="input" type="text" name="name" placeholder="nome" onChange={handleInputChange} value={formValues.name || ''}/>
            <input class="input"  type="email" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email || ''}/>

            <div className="radios">
              <p>Sexo</p>
              <label><input type="radio" value="masculino" name="sexo"/>Masculino</label>
              <label><input type="radio" value="feminino" name="sexo"/>Feminino</label>
            </div>  

            <p>Selecione a linguagem</p>
            <select name="language"onChange={handleInputChange} value={formValues.language || ''}>
              <option value="javascript">JavaScript</option>
              <option value="php">PHP</option> 
              <option value="ruby">Ruby</option>
              <option value="java">Java</option>
              <option value="outros">Outros</option>
            </select> 
           
            <button type="submit" onclick="validate">Enviar</button>
            </div> 
         </form>
      
    );
}


export default App;


