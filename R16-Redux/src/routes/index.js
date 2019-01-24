import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from './../components/Home'
// import DetailFeed from './../components/DetailFeed'
import DetailList from './../components/DetailList'

export default class index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detail/" component={DetailList}/>
          <Route path="/" component={HomeComponent}/>
        </Switch>
      </Router>
    )
  }
}
