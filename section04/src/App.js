import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const redTitle = true

  return (
    <div className="App">
        <h1>React com css</h1>
        <MyComponent />
        <p style={{color: 'white', backgroundColor: 'red'}}>Css Inline no react.</p>

        {/* css inline dinâmico */}
        <h2 style={n > 10 ?({color: 'gold'}):({color: 'lightgreen'})}>Css dinâmico</h2>

        {/* classe dinâmica */}
        <h2 className={redTitle ? 'red-title': 'title'}>This title has a dinamic class</h2>

        {/* css modules */}
        <Title />
    </div>
  );
}

export default App;
