import Home from './components/Page/Home'
import NavBar from './components/foundation/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
      </Router>
    </>
  )
}

export default App
