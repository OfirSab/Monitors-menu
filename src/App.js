import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Legend from './components/Legend'
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <Switch>
      {/* <Route path="/" component={Welcome}/> */}
      <Route exact path="/" component={Welcome}/>
        <Route exact path="/legend/:legendNumber" render={ props =>(
              <Legend { ...props }/>
            )}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
