import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Notfound from './Notfound'
import Task from './Task'
import Edit from './Edit'
import Create from './Create'

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create New</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/task/:id" component={Task} />
          <Route path="/task/:id/edit" component={Edit} />
          <Route path="/create" component={Create} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
