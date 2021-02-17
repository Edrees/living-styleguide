import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const stories = storiesOf('Text Field', module);
addDecorator(withKnobs);

stories.add(
  'Default Text Field',
  () =>
    React.createElement(() => {
      const classes = useStyles();
      const [values, setValues] = React.useState({
        name: text('Inputfield', 'This is a text field'),
      });

      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

      return (
        <form>
          <TextField
            id="outlined-name"
            label={text('Placeholder', 'Placeholder text')}
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            onClick={action('clicked')}
          />
        </form>
      );
    }),
  { notes: 'A default text field' }
);
