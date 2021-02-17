import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sideBarOpen } from '../../redux/actions';
import { Drawer, Hidden, makeStyles, useTheme } from '../../all-components-lib/components';
import SideBarContent from './SideBarList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SideBar = ({ isSideBarOpen, setSideBarState }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={isSideBarOpen}
          onClose={() => setSideBarState(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SideBarContent />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <SideBarContent />
        </Drawer>
      </Hidden>
    </nav>
  );
};

SideBar.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  setSideBarState: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { isSideBarOpen: state.sideBarOpen };
};

export default connect(mapStateToProps, { setSideBarState: sideBarOpen })(SideBar);
