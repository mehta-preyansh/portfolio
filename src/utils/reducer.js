import { reducerCases } from "./constants";
import data from '../resources/projects.json'

export const initialState = {
  selectedProject: data.projects[0]
};

const reducer = (state, action)=>{
  switch(action.type){
    case reducerCases.SET_SELECTED_PROJECT: {
      return {...state, selectedProject: action.project}  
    }
    default: return state;
  }
}

export default reducer;