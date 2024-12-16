import { useState } from "react";

const Filho = ({ contador, setcontador }) => {

  const [contadorFilho, setcontadorFilho] = useState(0);

  return (
    <>
      <h1>Contador do pai: { contador }</h1>
      <h1>Contador do filho: { contadorFilho }</h1>
      <button 
        onClick={() => setcontadorFilho(contador + 1)}
      >
        add + 1 no contador do filho
      </button>

      <button 
        onClick={() => setcontadorFilho(0)}
      >
        zerar filho
      </button>

      <button 
        onClick={() => setcontador(contador + 1)}
      >
        mudar o valor do pai
      </button>

      <button
        onClick={() => {
          setcontador(0);
          setcontadorFilho(0);
        }}
      >
        zerar ambos
      </button>

    </>
  );
}

const App = () => {

  const [contador, setcontador] = useState(0);
  const [darkMode, setdarkMode] = useState(false);

  function generica(){
    alert("oi")
  }

  return (
    <div style={darkMode ? { backgroundColor: "black", color: "white"}: {backgroundColor: "initial", color: "initial"}}>
      <h1>Aula sobre states</h1>
      <button 
      onClick={generica}
      >saudação</button>
      <button onClick={() => setcontador(0)}>zerar</button>
      <button onClick={() => setcontador(contador + 1)}>add +1</button>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setdarkMode(!darkMode)}>mudar tema</button>
      <Filho contador={contador} setcontador={setcontador}/>
    </div>
  );
}

export default App;