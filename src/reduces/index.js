import { combineReducers } from 'redux';

import dataRoom from './dataRoom'
import currentRoom from './currentRoom'
import showInfoRoom from './showInfoRoom'
import changeTheme from './changeTheme'
import dataVietNamLanguage from './dataVietNamLanguage'
import changeVietNamLanguage from './changeVietNamLanguage'
import arrGif from './arrGif'
import Emoji from './Emoji'
import valueMessage from './valueMessage'
import listRoom from './listRoom'
import currentUser from './currentUser'
import allowLogin from './allowLogin'
import statusLogin from './statusLogin'
import statusRegister from './statusRegister'

const myReducer = combineReducers({
  dataRoom: dataRoom,
  currentRoom: currentRoom,
  showInfoRoom: showInfoRoom,
  changeTheme: changeTheme,
  dataVietNamLanguage: dataVietNamLanguage,
  changeVietNamLanguage: changeVietNamLanguage,
  arrGif: arrGif,
  Emoji: Emoji,
  valueMessage: valueMessage,
  listRoom: listRoom,
  currentUser: currentUser,
  allowLogin: allowLogin,
  statusLogin: statusLogin,
  statusRegister: statusRegister
});

export default myReducer;