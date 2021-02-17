import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme/';

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
addDecorator(ThemeDecorator);

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
