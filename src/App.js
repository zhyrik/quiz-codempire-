import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import QuizForm from './components/QuizForm.page'
import Result from './components/Result.page'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/result">
          <Result />
        </PrivateRoute>
        <Route exact path="/">
          <QuizForm />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}

export default App
