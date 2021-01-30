import React from 'react';
import Validation from './Validation';
import Character from './Character';
import styles from './Button.module.css';

class Exam4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      length: 0,
      msg: [],
    };
  }

  enterHandler = (e) => {
    if (e.key === 'Enter') {
      const msgs = [...this.state.msg];
      let msg = e.target.value;
      msgs.push(msg);

      this.setState({
        msg: msgs,
      });
      e.target.value = '';
    }
  };

  onChangeHandler = (e) => {
    const texts = e.target.value.split('');
    let count = texts.length;

    this.setState({
      texts: texts,
      length: count,
    });
  };

  deleteHandler = (msgIndex) => {
    const msgs = this.state.msg;
    msgs.splice(msgIndex, 1);
    this.setState({
      msg: msgs,
    });
  };

  render() {
    let chars = null;
    chars = this.state.msg.map((char, index) => {
      return (
        <Character
          key={index}
          msg={char}
          onClick={() => this.deleteHandler(index)}
        />
      );
    });
    return (
      <div>
        <input
          type='text'
          onChange={this.onChangeHandler}
          onKeyPress={this.enterHandler}
        ></input>
        <p>{this.state.length} 글자</p>
        <Validation length={this.state.length}></Validation>
        {chars}
        <button className={styles.error}>Error Btn</button>
      </div>
    );
  }
}

export default Exam4;
