import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import ClipboardJS from 'clipboard';

import { IconButton, Tooltip, FileCopyIcon, withStyles } from '../../all-components-lib/components';
import colors from '../../theme/styles/_colors.scss';

const styles = theme => ({
  preTag: {
    marginBottom: `${theme.spacing(4)}px !important`,
  },
  preCodeTag: {
    whiteSpace: 'pre-wrap !important',
  },
  copyButton: {
    position: 'absolute',
    right: '0',
    top: '0',
    borderRadius: '0',
    padding: theme.spacing(1),
  },
  copyIcon: {
    color: colors.lightGray3,
    fontSize: '18px',
  },
});

export class CodeSnippet extends Component {
  state = {
    tooltipLabel: 'Copy',
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    hasMargin: PropTypes.bool,
  };

  static defaultProps = {
    hasMargin: false,
  };

  componentDidMount() {
    const copyCode = document.getElementsByClassName('copy-button');

    this.clipboard = new ClipboardJS(copyCode, {
      target: trigger => trigger.previousElementSibling,
    });

    this.clipboard.on('success', e => {
      this.setState({
        tooltipLabel: 'Copied',
      });
      setTimeout(() => {
        e.clearSelection();
        this.setState({
          tooltipLabel: 'Copy',
        });
      }, 1000);
    });

    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { children, classes, hasMargin } = this.props;
    const { tooltipLabel } = this.state;

    return (
      <>
        <pre className={`line-numbers ${hasMargin ? classes.preTag : null}`}>
          <code className={`language-jsx ${classes.preCodeTag}`}>{children}</code>
          <Tooltip title={tooltipLabel}>
            <IconButton className={`copy-button ${classes.copyButton}`} aria-label="Delete">
              <FileCopyIcon className={classes.copyIcon} />
            </IconButton>
          </Tooltip>
        </pre>
      </>
    );
  }
}

export default withStyles(styles)(CodeSnippet);
