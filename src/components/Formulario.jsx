import React from 'react';
import { Form,Button } from 'react-bootstrap';

const Formulario = () => {
    return (
       <Form>
           <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
           <Form.Control type="email" placeholder="Enter email" />
           <Button variant="primary" type='submit'>
            enviar
           </Button>
      </Form.Group>
       </Form>
    );
};

export default Formulario;