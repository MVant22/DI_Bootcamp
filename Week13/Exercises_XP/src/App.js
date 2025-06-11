import logo from './logo.svg';
import './App.css';

const myelement = <h1>I Love JSX!</h1>
const sum = <div>React is {5 + 5} time better</div>

function App() {
  return (
    <div>
      <p>Hello World!</p>
      {myelement}
      {sum}
    </div>
  );
}

export default App;
