import React from 'react';
import Markdown from 'markdown-to-jsx';

import { Button, Typography } from '../../../all-components-lib/components';
import CodeSnippet from '../../../components/CodeSnippets';
import PageHeaderContent from '../../../components/PageHeaderContent';
import TabMenu from '../../../components/TabMenu';
import {
  defaultButton,
  primaryButton,
  secondaryButton,
  disabledButton,
  linkButton,
  uploadButton,
} from './ButtonsPage.mdx';

const tabItems = ['Guidelines', 'Code Example', 'Props'];

const containedButtons = [
  defaultButton,
  primaryButton,
  secondaryButton,
  disabledButton,
  linkButton,
  uploadButton,
];

const ButtonsPage = () => {
  return (
    <PageHeaderContent
      title="Buttons"
      description="Buttons allow users to take actions, and make choices, with a single tap."
    >
      To use the buttons, just import the Button component and use it as shown below:
      {/* TODO: modify below code, the path to import the Button from once npm package is created */}
      <CodeSnippet
        hasMargin
      >{` import { Button } from '../../all-components-lib/components' `}</CodeSnippet>
      {containedButtons.map(button => (
        <div key={containedButtons.indexOf(button)}>
          <Markdown
            options={
              button !== uploadButton
                ? {
                    overrides: {
                      Button: {
                        component: Button,
                      },
                    },
                  }
                : {
                    overrides: {
                      Button: {
                        component: Button,
                      },
                      input: {
                        props: {
                          style: { display: 'none' },
                        },
                      },
                    },
                  }
            }
          >
            {button}
          </Markdown>
          <TabMenu
            tabItems={tabItems}
            tabs={[
              <Typography variant="h6">Guidelines</Typography>,
              <CodeSnippet>{button}</CodeSnippet>,
              <Typography variant="h6">Props</Typography>,
            ]}
          />
        </div>
      ))}
    </PageHeaderContent>
  );
};

export default ButtonsPage;
