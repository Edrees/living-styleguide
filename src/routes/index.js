import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import GettingStartedPage from '../pages/getting-started-pages/GettingStartedPage';
import BrandsPage from '../pages/content-pages/BrandsPage';
import VocabularyPage from '../pages/content-pages/VocabularyPage';
import ColorsPage from '../pages/design-pages/ColorsPage';
import DesignGuidelinesPage from '../pages/design-pages/DesignGuidelines';
import TypographyPage from '../pages/design-pages/TypographyPage';
import ButtonsPage from '../pages/components-pages/buttons/ButtonsPage';
import TextFieldsPage from '../pages/components-pages/textfields/TextFieldsPage';
import PlaygroundPage from '../playground';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* GETTING STARTED */}
      <Route path="/gettingstarted" component={GettingStartedPage} />
      {/* CONTENT */}
      <Route exact path="/content/brands" component={BrandsPage} />
      <Route exact path="/content/vocabulary" component={VocabularyPage} />
      {/* DESIGN */}
      <Route exact path="/design/guidelines" component={DesignGuidelinesPage} />
      <Route exact path="/design/colors" component={ColorsPage} />
      <Route exact path="/design/typography" component={TypographyPage} />
      {/* COMPONENTS */}
      <Route exact path="/components/buttons" component={ButtonsPage} />
      <Route exact path="/components/textfields" component={TextFieldsPage} />
      {/* PLAYGROUND */}
      <Route exact path="/playground" component={PlaygroundPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
