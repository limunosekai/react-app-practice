import React, { Component } from 'react';
// import axios from 'axios';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className='Blog'>
          <nav>
            <ul>
              <li>
                <NavLink to='/posts/' exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/new-post' component={NewPost} />
          <Route path='/posts' component={Posts} />
          <Redirect from='/' to='/posts' />
        </Switch>
      </div>
    );
  }
}

export default Blog;
