
import './App.css';
import About from './Components/About';
import FormText from './Components/FormText';
import Navbar from './Components/Navbar';

function App() {
  return (
     <>
  <Navbar title="Lucifer"homeText="Home"/>
  <div className="container my-3">
   <FormText heading="enter the text here"/>  

  
  </div>
   <About/>
  
    </>
  );
}

export default App;
