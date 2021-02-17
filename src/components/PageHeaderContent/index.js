import React from 'react';
import PropTypes from 'prop-types';

import { Typography, makeStyles } from '../../all-components-lib/components';

const useStyles = makeStyles(theme => ({
  descriptionText: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(2),
  },
}));

const PageHeaderContent = ({ title, description, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary" className={classes.descriptionText}>
        {description ? `"${description}"` : null}
      </Typography>
      {children}
    </div>
  );
};

PageHeaderContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

PageHeaderContent.defaultProps = {
  description: '',
  children: '',
};

export default PageHeaderContent;
