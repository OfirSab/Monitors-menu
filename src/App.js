import './App.css';
import Navbar from './components/Navbar'
import Legend from './components/Legend'
function App() {
  const num = 0;
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <Legend legendId={num}/>
    </div>
  );
}

export default App;
