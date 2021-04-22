import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  )
}


export default AppRouter
