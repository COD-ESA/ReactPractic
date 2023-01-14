import {Squad} from './components/squad/Squad'
import { Time} from './components/time/Time';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Squad timer={<Time />} />
      </header>
    </div>
  );
}

export default App;
