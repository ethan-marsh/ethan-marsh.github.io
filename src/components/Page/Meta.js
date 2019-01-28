import React from 'react';
import Helmet from 'react-helmet';

const Meta = () => (
  <Helmet>
    <html lang="en" amp />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Raleway:300,400,500,700"
      rel="stylesheet"
      type="text/css"
    />
    <title>Ethan Marsh</title>
  </Helmet>
);

export default Meta;
