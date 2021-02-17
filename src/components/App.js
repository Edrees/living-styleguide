import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { CssBaseline, ThemeProvider, withStyles } from '../all-components-lib/components';
import Routes from '../routes';
import themeDefault from '../theme';
import themeOne from '../all-components-lib/themes/theme-one';
import themeTwo from '../all-components-lib/themes/theme-two';
import TopBar from './Navigation/TopBar';
import SideBar from './Navigation/SideBar';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    justifyContent: 'space-between',
    minHeight: '84px',
    // ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    theme: PropTypes.string.isRequired,
  };

  getTheme() {
    const { theme } = this.props;
    switch (theme) {
      case 'theme1':
        return themeOne;
      case 'theme2':
        return themeTwo;
      default:
        return themeDefault;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={this.getTheme()}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <TopBar />
            <SideBar />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Routes />
            </main>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.selectedTheme,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(App));
