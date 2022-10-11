import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <h1>Formulários com React</h1>
        <MyForm user ={{name: 'Davi', email:'davi@gmail.com', bio:'dev', role:'admin'}}/>
    </div>
  );
}

export default App;
