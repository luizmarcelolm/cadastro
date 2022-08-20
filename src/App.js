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

    console.log('***handleValue', formValues);
    return (
      <form onSubmit = {handleSubmit}>
         <input type="text" name="name" placeholder="name" onChange={handleInputChange} />
         <input type="text" name="email" placeholder="email" onChange={handleInputChange} />
         <button type="submit">Enviar</button>
      </form>
    );
}

export default App;
