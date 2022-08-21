import { useState } from 'react';
import './App.css';

   
function App() {
    
           
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) =>{
   
    const {name, value} = e.target;

    setFormValues({...formValues, [name]: value});
   
   }
    const handleSubmit = (e) =>{

      const input_element_name=document.getElementById("inputName");
      const input_element_email=document.getElementById("inputEmail");
      
      const validacao_input_name = () => input_element_name.value.length > 0;
      const validacao_input_email = () => input_element_email.value.length > 0;

       //tirar o vermelho do input caso tenha texto no campo nome
       const handle_input_change_name = () => {
        const inputIsValid_name = validacao_input_name();
        if (inputIsValid_name) {
            return input_element_name.classList.remove("erro");
        }
      };
       input_element_name.addEventListener("change", () => handle_input_change_name());  

       //tirar o vermelho do input caso tenha texto no campo email
       const handle_input_change_email = () => {
        const inputIsValid_email = validacao_input_email();
        if (inputIsValid_email) {
            return input_element_email.classList.remove("erro");
        }
      };
       input_element_email.addEventListener("change", () => handle_input_change_email());  
  
      
      const inputIsValid_name = validacao_input_name();
      e.preventDefault();
          
      if (!inputIsValid_name) {
         input_element_name.classList.add("erro"); 
         return;
        
      }  
             
      const inputIsValid_email = validacao_input_email();
      e.preventDefault();
          
      if (!inputIsValid_email) {
        return input_element_email.classList.add("erro");
      }

      if (inputIsValid_name & inputIsValid_email) {
        document.getElementById("inputName").value = "";
        document.getElementById("inputEmail").value = "";
        return alert("CADASTRO ENVIADO COM SUCESSO!!!");
        
      } 
    }     
      
    return (          
             
         <form onSubmit = {handleSubmit}>
           <div className="container">
            <h1>CADASTRO</h1>
            <input class="input" type="text" name="name" placeholder="nome" id="inputName" onChange={handleInputChange} value={formValues.name || ''}/>
            <input class="input"  type="email" name="email" placeholder="email" id="inputEmail" onChange={handleInputChange} value={formValues.email || ''}/>

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
           
            <button type="submit"> Enviar</button>
            </div> 
         </form>
      
    );
}

export default App;


