import { ADD_NAME } from "../constants/action-types";
const initialState = {
  names: ['Pablo']
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_NAME) {
    return Object.assign({}, state, {
      names: state.names.concat(action.payload.name)
    });
  }
  return state;
}
export default rootReducer;