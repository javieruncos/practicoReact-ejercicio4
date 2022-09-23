import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



const ItemTarea = ({nombre,borrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {nombre}
            <Button variant="danger" onClick={()=>borrarTarea(nombre)}>borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;