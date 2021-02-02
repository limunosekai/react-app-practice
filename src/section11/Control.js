import React, { Component } from 'react';
import Users from './Users/Users';
import Courses from './Courses/Courses';
import { Route, NavLink } from 'react-router-dom';

class Control extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 'auto',
              justifyContent: 'center',
            }}
          >
            <li style={{ display: 'inline-block', padding: '16px' }}>
              <NavLink to='/users'>Users</NavLink>
            </li>
            <li style={{ display: 'inline-block', padding: '16px' }}>
              <NavLink to='/courses'>Courses</NavLink>
            </li>
          </ul>
        </nav>
        <Route path='/users' component={Users} />
        <Route path='/courses' component={Courses} />
      </div>
    );
  }
}

export default Control;
