import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '@material-ui/core/Button';

const stories = storiesOf('Button', module);

addDecorator(withKnobs);

// storiesOf('Button', module)
stories
  .add(
    'Default Button',
    () => (
      <Button variant="contained" onClick={action('clicked')} disabled={boolean('Disabled', false)}>
        {text('Label', 'Default Button')}
      </Button>
    ),
    { notes: 'A default button component' }
  )
  .add(
    'Primary Button',
    () => (
      <Button
        variant="contained"
        color="primary"
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
      >
        {text('Label', 'Primary Button')}
      </Button>
    ),
    { notes: 'A primary button component' }
  )
  .add(
    'Secondary Button',
    () => (
      <Button variant="contained" color={text('Color', 'secondary')} onClick={action('clicked')}>
        {text('Label', 'Secondary Button')}
      </Button>
    ),
    { notes: 'A secondary button component' }
  );
