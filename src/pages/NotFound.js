import React from 'react';
import { WarningIcon, makeStyles } from '../all-components-lib/components';

const useStyles1 = makeStyles(theme => ({
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const NotFound = () => {
  const classes = useStyles1();

  return (
    <span className={classes.message}>
      <WarningIcon className={classes.icon} />
      404 Page Not Found
    </span>
  );
};

export default NotFound;
