import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../../all-components-lib/components';
import theme from '../../theme';

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
