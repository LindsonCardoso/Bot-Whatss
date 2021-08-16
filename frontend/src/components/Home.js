
import React, { useEffect, useState } from 'react';
//import Header from '../Header';
//import axios from 'axios';
// Initializing the cors middleware



const Home = () => {

    const [number, setNumber] = React.useState("");
    const [msg, setMsg] =  React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      };

 //
 async function handleSubmit(){
     try {
  const response = await fetch('http://localhost:3001/sendText', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            sessionName: "session1", 
            number: number,
            text: msg
        }
    )
  });

  const content = await response.json();
  console.log(content);

}catch (error) {
    alert(error?.message || "Something went wrong");
  } finally {

    setMsg("");
    setNumber("");
  }
 };  

const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    const charachtersData = await fetchCharacters(inputValue);
    setCharacters(charachtersData);
  };


    return(
    <>      

        <div className="container col-5 p-5">
        <div className="display-4 mb-3">
            WhatsApp
        </div>
        
        <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Número</span>
            </div>
            <input type="text" class="form-control"
             aria-label="number"
             aria-describedby="basic-addon1"
             onChange={handleChange}
             />
        
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Mensagem</span>
            </div>
            <textarea 
            className="form-control" 
            aria-label="With textarea"
            onChange={handleChange}
            >

            </textarea>
        </div>
        <div className="input-group row">
            <div className="col-sm-10">
                <button type="submit" className="btn btn-success">Enviar</button>
            </div>
        </div>
        <div id="loading" className="row" style={{textAlign: 'center'}}>
        </div>
        </form>
    </div>
  


    </>

    )

}

export default Home