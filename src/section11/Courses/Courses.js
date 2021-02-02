import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Course from './Course';

class Courses extends Component {
  state = {
    data: [
      { id: 1, title: 'java' },
      { id: 2, title: 'react' },
      { id: 3, title: 'http' },
    ],
  };

  render() {
    const courses = this.state.data.map((course) => {
      return (
        <Link key={course.id} to={this.props.match.url + '/' + course.id}>
          <article>{course.title}</article>
        </Link>
      );
    });

    return (
      <div>
        <h1>Courses Page</h1>
        <section>{courses}</section>
        <Route path={this.props.match.url + '/:id'} component={Course} />
      </div>
    );
  }
}

export default Courses;
