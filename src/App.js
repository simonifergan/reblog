import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
import BlogEdit from './components/blogs/BlogEdit';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={BlogList}/>
            <Route path='/blog/:blogId' component={BlogDetails} />
            <Route path='/edit/:blogId?' component={BlogEdit} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
