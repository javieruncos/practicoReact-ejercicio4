import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({arregloTarea,borrarTarea}) => {
    return (
        <ListGroup>
            {
             arregloTarea.map((Item,indice)=><ItemTarea key={indice} nombre={Item} borrarTarea={borrarTarea}/>)

            }
       </ListGroup>
    );
};

export default ListaTarea;