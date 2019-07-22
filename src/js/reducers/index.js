import { ADD_PERSON, REMOVE_PERSON } from "../constants/action-types";
const initialState = {
  persons: {
    data: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }, { id: 3, name: 'User 3' }],
    currentId: 3
  }
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_PERSON) {
    const id = state.persons.currentId + 1;
    return {
      ...state,
      persons: {
        data: state.persons.data.concat({ ...action.payload, id }),
        currentId: id
      }
    };
  } else if (action.type === REMOVE_PERSON) {
    const { id } = action.payload;
    return {
      ...state,
      persons: {
        ...state.persons,
        data: state.persons.data.filter(person => person.id !== id),
      }
    }
  }
  return state;
}
export default rootReducer;