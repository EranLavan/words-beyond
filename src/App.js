import logo from './logo.svg';
import './App.css';
import RandomizerA from './components-r/RandomizerA';
import Chart from './components-t/Chart';
import Gtable from './components-t/Gtable';
import Gchart from './components-t/Gchart';
import Solubility from './components-t/Solubility';

function App() {
  return (
    <div>
      {/* <AaApiTestOne /> */}
      {/* <RandomizerA /> */}
      {/* <Chart /> */}

      <Gtable />

      <Gchart />

      <Solubility />
    </div> 
  );
}

export default App;
