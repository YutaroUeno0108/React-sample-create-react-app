import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    // normal syntax unless you use addCount = () =>  {, you need to set up this.addCount.bind(this);
    // this.addCount = this.addCount.bind(this);
  }
// this is normal syntax
//   addCount() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

  addCount = () =>  {
    this.setState({
      count: this.state.count + 1
    });
  }

  addCount2 = () => {
    //this 'this' is null
    console.log(this);
  }

 render() {
   return (
      <button onClick={this.addCount}>
        buttonCount{this.state.count}
      </button>
   );
 }
}

export default Button;