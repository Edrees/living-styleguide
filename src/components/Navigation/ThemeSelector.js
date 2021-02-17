import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FormControl, Select, withStyles } from '../../all-components-lib/components';
import { selectedTheme } from '../../redux/actions';

const styles = () => ({
  select: {
    '&:before, &:after, &:hover:before': {
      borderBottom: '0',
    },
  },
});

export class ThemeSelector extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    theme: PropTypes.string.isRequired,
    currentTheme: PropTypes.func.isRequired,
  };

  handleChange = event => {
    const { currentTheme } = this.props;
    currentTheme(event.target.value);
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <FormControl className="dropdown">
        <Select
          native
          value={theme}
          onChange={this.handleChange}
          className={`dropdown__select ${classes.select}`}
        >
          <option value="default">Default Theme</option>
          <option value="theme1">Theme One</option>
          <option value="theme2">Theme Two</option>
        </Select>
      </FormControl>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.selectedTheme,
  };
};

export default connect(mapStateToProps, { currentTheme: selectedTheme })(
  withStyles(styles)(ThemeSelector)
);
