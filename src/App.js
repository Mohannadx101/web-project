import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills} from './components/Skills';
import Snowfall from 'react-snowfall';
import {Projects} from './components/Projects';

function App() {
  return (
    <div className="App">
      <Snowfall color="#82C3D9" />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
