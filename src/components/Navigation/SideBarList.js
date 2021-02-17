import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '../../all-components-lib/components';
import sideBarListData from './SideBarListData';
import { sideBarOpen, pageTitle } from '../../redux/actions';

const urlPath = function getUrlPath() {
  const urlPathname = window.location.pathname.split('/')[1];
  return urlPathname;
};

class SideBarContent extends Component {
  state = {
    sideBarItems: [],
    expanded: false,
  };

  static propTypes = {
    sideBarState: PropTypes.func.isRequired,
    setPageTitle: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setState({
      sideBarItems: sideBarListData,
    });

    sideBarListData.map(item => {
      const { setPageTitle } = this.props;

      if (item.path === urlPath()) {
        const indexOfItem = sideBarListData.indexOf(item);
        setPageTitle(item.name);

        return this.setState({
          expanded: `panel${indexOfItem}`,
        });
      }
      return false;
    });
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded, sideBarItems } = this.state;
    const { sideBarState, setPageTitle } = this.props;

    return (
      <>
        <List className="navigation">
          <NavLink
            to="/"
            className="navigation__link"
            style={{ minHeight: '76px' }}
            onClick={() => setPageTitle('Home')}
          >
            <ListItem>
              <Typography component="h5" variant="h5">
                Design System
                {/* <Typography variant="caption" display="block" gutterBottom>
                  v1.0.1
                </Typography> */}
              </Typography>
            </ListItem>
            <Divider />
          </NavLink>
          {sideBarItems.map((link, index) => (
            <ExpansionPanel
              key={link.path}
              expanded={expanded === `panel${index}`}
              onChange={this.handleChange(`panel${index}`)}
              className="expansion-panel"
              onClick={() => setPageTitle(link.name)}
            >
              {link.subLinks.length === 0 && (
                <ExpansionPanelSummary className="expansion-panel__summary">
                  <NavLink
                    to={`/${link.path}`}
                    key={`${link.path}`}
                    activeClassName="active"
                    className="navigation__link"
                    onClick={() => sideBarState(false)}
                  >
                    <ListItem button>
                      <Typography>{link.name}</Typography>
                    </ListItem>
                  </NavLink>
                </ExpansionPanelSummary>
              )}
              {link.subLinks.length !== 0 && (
                <ExpansionPanelSummary className="expansion-panel__summary">
                  <ListItem button>
                    <Typography>{link.name}</Typography>
                  </ListItem>
                </ExpansionPanelSummary>
              )}
              {link.subLinks.length !== 0 && (
                <ExpansionPanelDetails className="expansion-panel__details">
                  <List dense>
                    {link.subLinks
                      .sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                      })
                      .map(sub => (
                        <NavLink
                          to={`/${link.path}/${sub.path}`}
                          key={`${link.path}-${sub.path}`}
                          activeClassName="active"
                          className="navigation__sublink"
                          onClick={() => sideBarState(false)}
                        >
                          <ListItem button>
                            <ListItemText
                              className="navigation__sublink-content"
                              primary={sub.name}
                            />
                          </ListItem>
                        </NavLink>
                      ))}
                  </List>
                </ExpansionPanelDetails>
              )}
            </ExpansionPanel>
          ))}
          <ExpansionPanel className="expansion-panel">
            <ExpansionPanelSummary className="expansion-panel__summary">
              <a
                className="navigation__link"
                color="inherit"
                href="http://localhost:6060"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItem button>
                  <Typography>React Styleguidist</Typography>
                </ListItem>
              </a>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </List>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { isSideBarOpen: state.sideBarOpen, pageTitle: state.pageTitle };
};

export default connect(mapStateToProps, { sideBarState: sideBarOpen, setPageTitle: pageTitle })(
  SideBarContent
);
