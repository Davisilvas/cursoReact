import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    {
      name: 'Davi',
      age: 21,
      profession: 'developer'
    },
    {
      name: 'Maria Eduarda',
      age: 23,
      profession: 'nurse'
    },
    {
      name: 'Doly',
      age: 13,
      profession: 'dog'
    }
  ]

  return (
    <div className="App">
      {users.map((user) => (
        <UserDetails name={user.name}
        age={user.age}
        profession={user.profession} />
      ))}
    </div>
  );
}

export default App;
