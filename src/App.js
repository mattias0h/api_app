import React, { Component } from 'react';

import Home from './views/Home';
import SinglePost from './views/SinglePost';
import AllComments from './views/AllComments';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/:id" component={SinglePost} />
          <Route exact path="/posts/:postId/comments" component={AllComments} />
        </Switch>
      </Router>
    )
  }

}

export default App;
