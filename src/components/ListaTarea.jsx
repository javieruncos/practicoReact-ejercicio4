import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({arregloTarea}) => {
    return (
        <ListGroup>
            {
             arregloTarea.map((Item,indice)=><ItemTarea key={indice}/>)

            }
       </ListGroup>
    );
};

export default ListaTarea;