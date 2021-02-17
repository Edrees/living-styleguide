import { SELECTED_THEME, SIDEBAR_VISIBILITY, PAGE_TITLE } from './actionTypes';

export const selectedTheme = theme => {
  return {
    type: SELECTED_THEME,
    payload: theme,
  };
};

export const sideBarOpen = state => {
  return {
    type: SIDEBAR_VISIBILITY,
    payload: state,
  };
};

export const pageTitle = title => {
  return {
    type: PAGE_TITLE,
    payload: title,
  };
};
