import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import '../css/Root.css';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Max', age: 28 },
        { name: 'Jenny', age: 21 },
      ],
    };
  }

  userHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value, age: 30 },
        { name: 'Lose', age: 22 },
      ],
    });
  };

  initUIHandler = () => {
    this.setState({
      users: [
        { name: 'Max', age: 28 },
        { name: 'Jenny', age: 21 },
      ],
    });
  };

  render() {
    const style = {
      border: '1px solid #eee',
      backgroundColor: 'tomato',
      textAlign: 'center',
    };
    return (
      <div className='Root'>
        <UserInput
          change={this.userHandler.bind(this)}
          name={this.state.users[0].name}
        ></UserInput>
        <button style={style} onClick={() => this.initUIHandler()}>
          init
        </button>
        <UserOutput
          name={this.state.users[0].name}
          age={this.state.users[0].age}
        ></UserOutput>
        <UserOutput
          name={this.state.users[1].name}
          age={this.state.users[1].age}
        ></UserOutput>
      </div>
    );
  }
}

export default Root;
