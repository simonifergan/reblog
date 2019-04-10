import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
// import BlogEdit from './components/blogs/BlogEdit';
import PostEdit from './components/blogs/PostEdit';
import SignUp from './components/auth/SignUp';
import UserService from './services/UserService';
import PostService from './services/PostService';

class App extends Component {
  state = {
    users: UserService.query(),
    posts: PostService.query(),
  }

  saveUser = async (user) => {
    await UserService.signup(user);
    this.setState({
      users: [...this.state.users, user]
    })
  }

  savePost = async (post) => {
    await PostService.save(post);
    this.setState({
      posts: [...this.state.posts, post]
    })
  }



  render() {
    const userList = this.state.users.map(user => (<li key={user._id}>{user.firstname + user.lastname}</li>));
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={BlogList} />
            <Route path='/blog/:blogId' component={BlogDetails} />
            <Route path='/post/:postId?' render={(props) => (<PostEdit {...props} savePost={this.savePost} />)} />
            <Route path='/signup' render={(props) => (<SignUp {...props} saveUser={this.saveUser} />)} />
          </Switch>
          <ul>
            {userList}
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
