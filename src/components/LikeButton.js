import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  updateCounter() {
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1 }
    });
  }

  render() {
    return (
      <button onClick={() => this.updateCounter()}>
        Likes: {this.state.counter} 
      </button>
    );
  }
}

export default LikeButton;