import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { PassThrough } from 'stream';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    console.log(this);
    assert(this !== window, "this !== window")
    this.callApi()
      .then(res => this.setState({ response: res.message }))
      .catch(err => console.log(err));

    function Button() {
      this.clicked = false;
      this.click = () => {
        this.clicked = true;
        assert(button.clicked, "This button has been clicked");
        assert(this === window, "In arrow function this === window");
        assert(window.clicked, "cliecked is stored in window");

      };
    }

    var button = new Button();
    var elem = document.getElementById("test");
    elem.addEventListener("click", button.click);

    function assert(val1, val2) {
      if (val1) {
        console.log(val2);
      }
    }
  }

  callApi = async () => {
    const response = await fetch('/api/ninjas');
    console.log("test")
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <button id="test">Click Me!</button>


      </div>
    );
  }
}

export default App;
