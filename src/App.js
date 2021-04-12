import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Legend from './components/Legend'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <Switch>
        {/* <Route path="/legend/:legendNumber" component={Legend}/> */}
        <Route exact path="/legend/:legendNumber" render={ props =>(
              <Legend { ...props }/>
            )}/>
      </Switch>
      {/* <Legend legendId={num}/> */}
    </div>
    </Router>
  );
}

export default App;
