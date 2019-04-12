
// Essentials
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from './store/actions/AuthActions';
import * as blogActions from './store/actions/BlogActions';
import * as postActions from './store/actions/PostActions';

// Components
import Navbar from './components/layout/Navbar';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
// import BlogEdit from './components/blogs/BlogEdit';
// import PostEdit from './components/blogs/PostEdit';
import PostDetails from './components/posts/PostDetails';

class App extends Component {


  componentDidMount() {
    this.props.loadBlogs();
  }


  render() {
    const { blogs } = this.props;
    // const { user } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' render={(props) => (<BlogList {...props} blogs={blogs} />)} />
            <Route
              path='/blog/:blogId'
              render={
                (props) => (
                  <BlogDetails {...props} blog={this.props.blogToDisplay} loadBlogById={this.props.loadBlogById} clearBlogToDisplay={this.props.clearBlogToDisplay} />)
              }
            />
            <Route
              path='/post/:postId'
              render={
                (props) => (<PostDetails {...props} post={this.props.postToDisplay} loadPostById={this.props.loadPostById} clearPostToDisplay={this.props.clearPostToDisplay} />)
              }
            />
            {/* <Route path='/post/:postId?' render={(props) => (<PostEdit {...props} savePost={this.savePost} />)} /> */}
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
    user: state.auth.user,
    blogs: state.blog.blogs,
    blogToDisplay: state.blog.blogToDisplay,
    postToDisplay: state.post.postToDisplay,
  }
}

const mapDispatchToProps = {
  ...authActions,
  ...blogActions,
  ...postActions
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
