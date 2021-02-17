import { combineReducers } from 'redux';
import { SELECTED_THEME, SIDEBAR_VISIBILITY, PAGE_TITLE } from '../actions/actionTypes';

const selectedThemeReducer = (selectedTheme = 'default', action) => {
  if (action.type === SELECTED_THEME) {
    return action.payload;
  }

  return selectedTheme;
};

const sideBarOpenReducer = (sideBarOpen = false, action) => {
  if (action.type === SIDEBAR_VISIBILITY) {
    return action.payload;
  }

  return sideBarOpen;
};

const pageTitleReducer = (pageTitle = 'Home', action) => {
  if (action.type === PAGE_TITLE) {
    return action.payload;
  }

  return pageTitle;
};

export default combineReducers({
  selectedTheme: selectedThemeReducer,
  sideBarOpen: sideBarOpenReducer,
  pageTitle: pageTitleReducer,
});
