import './App.css';

import Racoon from './assets/racoon.jfif'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ManageData from './components/ManageData';
import RenderLista from './components/RenderLista';
import ShowUserName from './components/ShowUserName';

function App() {
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
        </div>
      </div>
    </div>
  );
}

export default App;
