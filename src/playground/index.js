import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {
  AppBar,
  Button,
  Card,
  CssBaseline,
  Divider,
  Drawer,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuIcon,
  Paper,
  Select,
  Snackbar,
  SnackbarContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  ExpandMoreIcon,
  FileCopyIcon,
  InfoIcon,
  WarningIcon,
  makeStyles,
} from '../all-components-lib/components';
import colors from '../theme/styles/_colors.scss';

const scope = {
  AppBar,
  Button,
  Card,
  CssBaseline,
  Divider,
  Drawer,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuIcon,
  Paper,
  Select,
  Snackbar,
  SnackbarContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  ExpandMoreIcon,
  FileCopyIcon,
  InfoIcon,
  WarningIcon,
};

const useStyles = makeStyles(theme => ({
  liveEditor: {
    backgroundColor: colors.black,
    marginBottom: theme.spacing(2),
    fontSize: 14,

    '& textarea': {
      caretColor: colors.white,
      outline: 'none',
    },
  },
  liveError: {
    color: colors.errorColor,
  },
}));

const code = `
const componentExample = () => <React.Fragment>
  <Typography variant="h5">Preview</Typography>
  <Button variant="contained" color="primary">Primary Button</Button>
</React.Fragment>

render(componentExample)
`;

const Playground = () => {
  const classes = useStyles();

  return (
    <LiveProvider code={code} scope={scope} noInline>
      <LiveError className={classes.liveError} />
      <LiveEditor className={classes.liveEditor} />
      <LivePreview />
    </LiveProvider>
  );
};

export default Playground;
