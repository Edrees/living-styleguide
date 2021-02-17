import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';

import { TextField, Typography } from '../../../all-components-lib/components';
import CodeSnippet from '../../../components/CodeSnippets';
import PageHeaderContent from '../../../components/PageHeaderContent';
import TabMenu from '../../../components/TabMenu';
import { defaulTextField, requiredTextField } from './TexFieldsPage.mdx';

const tabItems = ['Guidelines', 'Code Example', 'Props'];

const TextFieldsPage = () => {
  const [values, setValues] = useState({
    name: 'Hello Worlds',
  });
  const [errorOccured, setErrorValue] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    if (event.target.value === '') {
      setErrorValue(true);
    } else {
      setErrorValue(false);
    }
  };

  return (
    <PageHeaderContent title="Text Fields" description="Text fields let users enter and edit text.">
      To use the buttons, just import the Button component and use it as shown below:
      {/* TODO: modify below code, the path to import the Button from once npm package is created */}
      <CodeSnippet
        hasMargin
      >{` import { TextField } from '../../all-components-lib/components' `}</CodeSnippet>
      <Typography>Default text field</Typography>
      <Markdown
        options={{
          overrides: {
            TextField: {
              component: TextField,
              props: {
                value: values.name,
                onChange: handleChange('name'),
              },
            },
          },
        }}
      >
        {defaulTextField}
      </Markdown>
      <TabMenu
        tabItems={tabItems}
        tabs={[
          <Typography variant="h6">Guidelines</Typography>,
          <CodeSnippet>{defaulTextField}</CodeSnippet>,
          <Typography variant="h6">Props</Typography>,
        ]}
      />
      <Typography>Required text field</Typography>
      <Markdown
        options={{
          overrides: {
            TextField: {
              component: TextField,
              props: {
                value: values.name,
                error: errorOccured,
                onChange: handleChange('name'),
              },
            },
          },
        }}
      >
        {requiredTextField}
      </Markdown>
      <TabMenu
        tabItems={tabItems}
        tabs={[
          <Typography variant="h6">Guidelines</Typography>,
          <CodeSnippet>{requiredTextField}</CodeSnippet>,
          <Typography variant="h6">Props</Typography>,
        ]}
      />
    </PageHeaderContent>
  );
};

export default TextFieldsPage;
