  import React from "react";
  
  class Counter extends React.Component {
    constructor(props) {
      super(props)

      this.state = {count:0};
      this.handleDecrement = this.handleDecrement.bind(this);
      this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
      console.log(this);
      this.setState(curState => {
        return {count: curState.count + 1}
       });
    }

    handleDecrement() {
      console.log(this);
      this.setState(curState => {
        return {count: curState.count - 1}
       });
    }



    render () {

      const date = new Date ('june 21 2027')
      date.setDate(date.getDate() + this.state.count);

      return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{date.toDateString()} [{this.state.count}]</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
      )
    }
  }

  export default Counter;

  // w Class nie mozemy uzywac useState, najpierw Constructor