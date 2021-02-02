import React from 'react';

class Course extends React.Component {
  render() {
    let id = +this.props.match.params.id;
    console.log(id);
    let text = null;
    switch (id) {
      case 1:
        text = <p>hi</p>;
        break;
      case 2:
        text = <p>hello</p>;
        break;
      case 3:
        text = <p>bye</p>;
        break;
      default:
    }
    return <div>{text}</div>;
  }
}

export default Course;
