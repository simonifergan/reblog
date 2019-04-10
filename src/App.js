import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
import BlogEdit from './components/blogs/BlogEdit';
import SignUp from './components/auth/SignUp';
import UserService from './services/UserService';

class App extends Component {
  state = {
    users: UserService.query(),
  }

  saveUser = async (user) => {
    await UserService.signup(user);
    this.setState({
      users: [...this.state.users, user]
    })
  }

  
  render() {
    const userList = this.state.users.map(user => (<div>{user}</div>));
    console.log(userList);
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
          <div>{this.userList}</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
