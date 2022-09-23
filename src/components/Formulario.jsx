import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setarregloTarea] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setarregloTarea([...arregloTarea, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombre) =>{
    let newArreglo = arregloTarea.filter((Item)=>Item !== nombre);
    setarregloTarea(newArreglo)
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}/>
    </>
  );
};

export default Formulario;
