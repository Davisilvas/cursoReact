import './App.css';

import Racoon from './assets/racoon.jfif'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ManageData from './components/ManageData';
import RenderLista from './components/RenderLista';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunctions from './components/ExecuteFunctions';
import { useState } from 'react';
import StateLift from './components/StateLift';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const [message, setMessage] = useState()

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const cars = [
    {
      id: 1,
      name: 'Argo',
      brand: 'Fiat',
      year: 2021,
      maxSpeed: 185 
    },
    {
      id: 2,
      name: 'ônix',
      brand: 'Chevrolet',
      year: 2018,
      maxSpeed: 176
    }
  ]

  function showMessage(){
    console.log('Evento do componente pai')
  }

  return (
    <div className="App">
      <h1>Avançando em React.Js</h1>
      <div>
        <div>
              {/* img em public */}
              {/* a partir da pasta públic a gente pode acessar normalmente, direto com o path dela  */}
              <img src="/printWow.jpg" alt="print de jogo" width='800'/>
          </div>
          <div>
              {/* Pra importar de algo que não está na pasta Public a gente importa como se fosse um módulo, e manipula também como se fosse um módulo. vide linha 3 para compreensão */}
              <img src={Racoon} alt="Guaxinin fofo"  width='800' height='500'/>
          </div>
      </div>
      <div>
        <h1>A partir daqui estaremos estudando hooks.</h1>
        <div>
          <ManageData />
          <RenderLista />
          <ConditionalRender />

          <h1>A partir daqui estaremos estudando o uso de Props</h1>
          {/* props que são números a gente tem que passar entre chaves */}
          {/* props normal */}
          <ShowUserName name='Davi' age = {21}/>
          <ShowUserName name='Maria' age = {23}/>

          {/* destructuring */}
          <CarDetails name='cooper'
          brand='mini'
          year={2022}
          maxSpeed={220}/>
          
          <CarDetails name='Fusion'
          brand='Ford'
          year={2020}
          maxSpeed={235}/>

          <h1>A partir daqui estaremos estudando renderização de lista em componente</h1>

          {/* loop em array de objetos */}

          {cars.map((car) =>(
            <CarDetails name={car.name}
              key={car.id}
              brand={car.brand}
              year={car.year}
              maxSpeed={car.maxSpeed} />
          ))}

          <h1>A partir daqui estaremos estudando React Fragments</h1>
          <Fragments />

          <h1>A partir daqui estaremos estudando children prop</h1>
          <Container>
            <p>E este é o conteúdo</p>
          </Container>

          <h1>A partir daqui estaremos estudando funções passadas em props</h1>
          <ExecuteFunctions showMessage={showMessage}/>

          <h1>A partir daqui estaremos estudando State lift</h1>
          <StateLift msg={message}/>
          <ChangeMessageState handleMessage={handleMessage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
