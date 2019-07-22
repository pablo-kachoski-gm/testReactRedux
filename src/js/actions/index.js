import { 
    ADD_PERSON,
    REMOVE_PERSON 
} from '../constants/action-types';

export const addPerson = (payload) => ({ type: ADD_PERSON, payload: payload })
export const removePerson = (payload) => ({ type: REMOVE_PERSON, payload: payload })