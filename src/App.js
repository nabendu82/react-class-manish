import './App.css';
import Counter from './components/Counter';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Welcome name="Flutter">Language of cross-mobile app</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click</button></Welcome>
      <br />
      <Greeting name="JavaScript" year="1995">Language of web</Greeting>
      <Greeting name="React" year="2013">Language of web-app</Greeting>
      <Greeting name="Golang" year="2018" />
      <br />
      <Counter />
    </div>
  );
}

export default App;
