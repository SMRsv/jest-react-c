import './App.css';
import Users from './components/Users';
import Users2 from './components/Users2';

function App() {

  const users = [
    {id: 1, name: "John", age: 15},
    {id: 2, name: "Kelly", age: 20}
  ];

  return (
    <div className="App">
      <Users />
      <hr/>
      {users.map(user => <Users2 user={user} />)}
      <hr/>
    </div>
  );
}

export default App;
