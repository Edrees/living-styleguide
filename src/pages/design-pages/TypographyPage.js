import React from 'react';

import { Typography } from '../../all-components-lib/components';
import PageHeaderContent from '../../components/PageHeaderContent';

const TypographyPage = () => {
  return (
    <PageHeaderContent
      title="Typography"
      description="Typography is one of the most important aspects of our Design System. Our applications and products
      need clear and consistent interfaces based on a strong foundation of typography."
    >
      The headings have the typeface/ fonttype/ font-family Quicksand Bold
      <Typography variant="h1">Heading H1 - 48px</Typography>
      <Typography variant="h2">Heading H2 - 42px</Typography>
      <Typography variant="h3">Heading H3 - 38px</Typography>
      <Typography variant="h4">Heading H4 - 32px</Typography>
      <Typography variant="h5">Heading H5 - 26px</Typography>
      <Typography variant="h6">Heading H6 - 22px</Typography>
    </PageHeaderContent>
  );
};

export default TypographyPage;
