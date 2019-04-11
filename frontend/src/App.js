
// Essentials
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as blogActions from './store/actions/BlogActions';
import * as authActions from './store/actions/AuthActions';

// Components
import Navbar from './components/layout/Navbar';
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
// import BlogEdit from './components/blogs/BlogEdit';
import PostEdit from './components/blogs/PostEdit';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import UserService from './services/UserService';
import PostService from './services/PostService';

class App extends Component {
  state = {
    users: UserService.query(),
    posts: PostService.query(),
  }

  savePost = async (post) => {
    await PostService.save(post);
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  componentDidMount() {
    this.props.loadBlogs();
  }


  render() {
    const { blogs } = this.props;
    const { user } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          {(user)? `${user.email} ${user._id}`: 'No user'}
          <Switch>
            <Route exact path='/' render={(props) => (<BlogList {...props} blogs={blogs} />)} />
            <Route path='/blog/:blogId' component={BlogDetails} />
            <Route path='/post/:postId?' render={(props) => (<PostEdit {...props} savePost={this.savePost} />)} />
            <Route path='/signin' render={(props) => (<SignIn {...props} auth={this.props.auth} />)} />
            <Route path='/signup' render={(props) => (<SignUp {...props} signup={this.props.signup} />)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs,
    user: state.auth.user,
  }
}

const mapDispatchToProps = {
  ...blogActions,
  ...authActions
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
