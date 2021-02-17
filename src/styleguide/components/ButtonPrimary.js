import React from 'react';
import PropTypes from 'prop-types';
import { Button as Buttons } from '../../all-components-lib/components';

/**
 * This page is meant as a showcase for all the components used in the applications supported by the
 * Design System, with code snippets and the available properties.
 *
 * @visibleName Primary Button
 */

const Button = () => (
  <Buttons variant="contained" color="primary">
    Button Primary
  </Buttons>
);
Button.propTypes = {
  /** The variants to use: */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  /** The button types which can be used: */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'text',
  color: 'default',
};

export default Button;
