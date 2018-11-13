import React from 'react';
import Form from './Form';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ['eat', 'sleep', 'code'],
      currentText: '',
      isAuthenticated: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentText: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault(); // prevents it from reloading the page
    const arrCopy = this.state.arr.slice();
    arrCopy.push(this.state.currentText);
    this.setState({
      arr: arrCopy,
      currentText: '',

    })
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          currentText={this.state.currentText}
        />
        <List
          arr={this.state.arr}
          isAuthenticated={this.state.isAuthenticated}
        />
      </div>
    )
  }
}

// const App = () => (
//   <div>
//     <h1>Hello My Classy Friend</h1>
//   </div>
// );

export default App;