import './App.css';
import Formulario from './components/Formulario';
import ListaTarea from './components/ListaTarea';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
     <Container className='contenedorFormulario'>
      <div>
       <h1 className='display-4'>Lista de tareas</h1>
       <Formulario titulo="hola mundo"/>
       <ListaTarea/>
      </div>
      </Container>
    </div>
  );
}

export default App;
