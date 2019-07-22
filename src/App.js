import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addPerson, removePerson } from './js/actions';
import PersonPlaceholder from './js/components/personPlaceholder';
import style from 'styled-components';

const PersonsContainer = style.ul`
  list-style-type: none;
  background: rgba(0,0,155, 0.2);
  padding: 20px 50px;
`;
const PersonRowContainer = style.ul`
  padding: 5px 0;
`;
const EmptyPlaceholder = style.div`
  padding: 20px;
`;

const defaultState = {
  newPersonName: '',
  addPersonBtnDisabled: true
};

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  handleNameInputChange = (event) => {
    const newPersonName = event.target.value;
    this.setState({ newPersonName, addPersonBtnDisabled: !newPersonName });
  };
  handleNameInputClear = (event) => {
    this.setState(defaultState);
  }
  handleAddPerson = () => {
    this.props.addPerson({ name: this.state.newPersonName });
    this.handleNameInputClear();
  };
  handleRemovePerson = (id) => {
    this.props.removePerson({ id });
  };
  render() {
    const { newPersonName } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {this.props.persons.length > 0 ? (
            <PersonsContainer>
              {
                this.props.persons.map(person => (
                  <PersonRowContainer key={person.id}>
                    <PersonPlaceholder person={person} removeAction={this.handleRemovePerson} />
                  </PersonRowContainer>)
                )
              }
            </PersonsContainer>
          ) : (<EmptyPlaceholder>Please Add a Person</EmptyPlaceholder>)}
          <div>
            <input
              value={newPersonName}
              onChange={this.handleNameInputChange}
            />
            <button
              onClick={this.handleAddPerson}
              disabled={(this.state.addPersonBtnDisabled) ? 'disabled' : ''}>
              Add
              </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.data
});
const mapDispatchToProps = {
  addPerson,
  removePerson
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
