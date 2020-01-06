import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import StudentPage from './pages/StudentPage.jsx'
import HousePage from './pages/HousePage.jsx'
import StudentId from './pages/StudentId.jsx'
import HouseId from './pages/HouseId.jsx'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <h1>Hogwarts School of WitchCraft & Wizardry</h1>

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Student" component={StudentPage}></Route>
        <Route exact path="/Student/:id" component={StudentId}></Route>
        <Route exact path="/House" component={HousePage}></Route>
        <Route exact path="/House/:id" component={HouseId}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
