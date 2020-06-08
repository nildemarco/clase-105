import React from 'react';
import useForm from './hooks/useForm';

const Form = () => {
  
   const [input, setInput]= useForm('')

   console.log(input)
    return (
        <form>
      <input type="text" name="nombre" onChange={setInput}></input>
      <input type="text" name="apellido" onChange={setInput}></input>
      </form>
    );
}

export default Form; 