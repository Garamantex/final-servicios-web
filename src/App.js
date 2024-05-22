import './App.css';
import { UseState } from './components/UseState';
import { UseReduce } from './components/UseReduce';

function App() {
  return (
    <div className="App home">
      <UseState />
      <UseReduce />
    </div>
  );
}

export default App;
