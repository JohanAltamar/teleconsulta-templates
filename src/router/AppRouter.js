import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import SeguimientoPage from '../pages/SeguimientoPage'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/seguimiento" component={SeguimientoPage} />
        </Switch>
      </div>
    </Router>
  )
}


export default AppRouter
