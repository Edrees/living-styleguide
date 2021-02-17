import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  AppBar,
  IconButton,
  MenuIcon,
  Toolbar,
  Typography,
  makeStyles,
} from '../../all-components-lib/components';
import ThemeSelector from './ThemeSelector';
import { sideBarOpen } from '../../redux/actions';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    minHeight: '84px',
    // ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const TopBar = ({ sideBarState, pageTitle }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => sideBarState(true)}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {pageTitle}
        </Typography>
        <ThemeSelector />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  sideBarState: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return { isSideBarOpen: state.sideBarOpen, pageTitle: state.pageTitle };
};

export default connect(mapStateToProps, { sideBarState: sideBarOpen })(TopBar);
