import actionTypes from '../const/actionTypes';

var initialState = [];
var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.setStatusLogin:
      return state = action.data;

    default:
      return state;
  }
}

export default myReducer;