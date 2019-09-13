import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Notfound from './Notfound'
import Task from './Task';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/task/:id" component={Task} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
