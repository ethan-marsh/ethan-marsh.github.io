import React from 'react';
import { Page } from 'components';
import { Home } from 'components';

const HomePage = props => (
  <Page>
    <Home {...props} />
  </Page>
);

export default HomePage;
