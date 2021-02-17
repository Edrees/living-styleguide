import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/styles';
import colors from '../../../theme/styles/_colors.scss';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: colors.successColor,
  },
  error: {
    backgroundColor: colors.errorColor,
  },
  info: {
    backgroundColor: colors.infoColor,
  },
  warning: {
    backgroundColor: colors.warningColor,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, variant } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={action('clicked')}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const stories = storiesOf('Alert', module);

addDecorator(withKnobs);

stories
  .add(
    'Info',
    () => (
      <MySnackbarContentWrapper
        variant={text('Variant', 'info')}
        message={text('Label', 'This is an info message!')}
      />
    ),
    { notes: 'Alerts' }
  )
  .add(
    'Error',
    () => (
      <MySnackbarContentWrapper
        variant={text('Variant', 'error')}
        message={text('Label', 'This is an error message!')}
      />
    ),
    { notes: 'A default button component' }
  )
  .add(
    'Warning',
    () => (
      <MySnackbarContentWrapper
        variant={text('Variant', 'warning')}
        message={text('Label', 'This is a warning message!')}
      />
    ),
    { notes: 'A default button component' }
  )
  .add(
    'Success',
    () => (
      <MySnackbarContentWrapper
        variant={text('Variant', 'success')}
        message={text('Label', 'This is a success message!')}
      />
    ),
    { notes: 'A default button component' }
  );
