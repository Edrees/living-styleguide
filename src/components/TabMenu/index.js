import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AppBar, Tabs, Tab, Typography, makeStyles } from '../../all-components-lib/components';
import colors from '../../theme/styles/_colors.scss';

const useStyles = makeStyles(theme => ({
  tabsAppBar: {
    marginTop: theme.spacing(2),
    boxShadow: 'none',
    border: `1px solid ${colors.lightGray2}`,
  },
  tabItem: {
    '&:hover': {
      backgroundColor: colors.lightGray3,
    },
  },
  tabContainer: {
    border: `1px solid ${colors.lightGray2}`,
    borderTop: 'none',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const TabContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.tabContainer}>
      {children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const TabMenu = ({ tabItems, tabs }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar className={classes.tabsAppBar} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {tabItems.map(item => (
            <Tab className={classes.tabItem} key={item} label={item} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((content, index) => {
        return value === index && <TabContainer key={value}>{content}</TabContainer>;
      })}
    </>
  );
};

TabMenu.propTypes = {
  tabItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TabMenu;
