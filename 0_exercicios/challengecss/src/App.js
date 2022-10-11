import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars =[
    { id: 1,
      name: 'Cooper',
      brand: 'Mini',
      year: 2022,
      km: 0,
      color: 'Red',},
    { id: 2,
      name: 'Silverado',
      brand: 'Chevrolet',
      year: 2019,
      km: 55.319,
      color: 'Silver',},
    { id: 3,
      name: 'Accord',
      brand: 'Honda',
      year: 2021,
      km: 20.618,
      color: 'Black',}
  ]
  return (
    <div className="App">
      <h1 className='main-title'>Car Details</h1>
      {cars.map((car)=>(
        <CarDetails key={car.id}
        name={car.name}
        brand={car.brand}
        year={car.year}
        km={car.km}
        color={car.color} />
      ))}
    </div>
  );
}

export default App;