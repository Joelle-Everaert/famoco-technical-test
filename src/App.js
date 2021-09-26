import Home from './components/Page/Home'
import NavBar from './components/foundation/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      </div>
    </>
  )
}

export default App
