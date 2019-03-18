import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  updateCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 }
    });
  }

  render() {
    return (
      <button onClick={()=> this.updateCounter()}>
        Likes: {this.state.counter} 
      </button>
    );
  }
}

export default LikeButton;