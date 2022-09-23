import React from 'react';
import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import ListaTarea from './ListaTarea';

const Formulario = () => {


     const handleSubmit = (e)=>{
       e.preventDefault();
       setarregloTarea([...arregloTarea,tarea]);
       setTarea("")
     }




    const [tarea, setTarea] = useState("")
    const [arregloTarea, setarregloTarea] = useState([])
    return (
        <>
       <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
               <Form.Control type="text"
                placeholder="Ingresa una tarea" 
                onChange={(e)=>setTarea(e.target.value)}
                value={tarea} />
               <Button variant="primary" type='submit'>
              enviar
             </Button>
           </Form.Group>
       </Form> 
        <ListaTarea/>
        </>
    );
};

export default Formulario;