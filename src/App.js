// import logo from './logo.svg';
import Testimonio from './componentes/Testimonio';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Testimonio y experiencia</h1>
        <hr></hr>
        <br></br>
        <Testimonio
        nombre='Jonnathan Monroy'
        pais='Colombia'
        imagen='foto.PNG'
        cargo='Analisis y desarrollo de sofware'
        empresa='HR'
        testimonio='Aprendi programacion en el diplomado de mision tic, ahora estoy estudiando profundizando mis conocimientos en el Cena'
        />
        <Testimonio
        nombre='Jonnathan Monroy'
        pais='Colombia'
        imagen='foto.PNG'
        cargo='Analisis y desarrollo de sofware'
        empresa='HR'
        testimonio='Aprendi programacion en el diplomado de mision tic, ahora estoy estudiando profundizando mis conocimientos en el Cena'
        />
        <Testimonio
        nombre='Jonnathan Monroy'
        pais='Colombia'
        imagen='foto.PNG'
        cargo='Analisis y desarrollo de sofware'
        empresa='HR'
        testimonio='Aprendi programacion en el diplomado de mision tic, ahora estoy estudiando profundizando mis conocimientos en el Cena'
        />
      </div>
    </div>
  );
}

export default App;
