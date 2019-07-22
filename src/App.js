import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addName } from './js/actions'

const defaultState = {
  name: ''
};
class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }
  
  handleNameInputChange = (event) => {
    this.setState({name: event.target.value});
  };
  handleNameInputClear = (event) => {
    this.setState(defaultState);
  }
  handleAddName = () => {
    this.props.addName( {name: this.state.name} );
    this.handleNameInputClear();
  };
  render() {
    const {name} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {
            this.props.names.map( username => (<div>{username}</div>))
          }
          <div>
            <input type='text' value={name} onChange={this.handleNameInputChange}></input>
            <button onClick={this.handleAddName}>Add</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  names: state.names
});
const mapDispatchToProps = {
  addName,
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
