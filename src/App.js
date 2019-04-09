import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BlogList from './components/blogs/BlogList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' component={BlogList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
