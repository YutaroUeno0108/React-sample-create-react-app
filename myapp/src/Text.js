import React, { Component } from 'react';

class Text extends Component {
   constructor(props) {
     super(props);
     this.state = {
       showText: true
       ,aa: 'test'
     };

     setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
     }, 1000);
   }

  render() {
    const text = this.state.showText? this.props.text : '';
    const test = this.state.aa;
    return (
      <div>
        <span style={{color: "red"}}>
          {text}
        </span>
        <label>{test}</label>
      </div>
    );
  }
}

export default Text;