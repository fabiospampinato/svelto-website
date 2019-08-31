
/* IMPORT */

import React from 'react';
import Button from '@components/button';
import Layout from '@layouts/layout';

/* INDEX */

const Index = () => (
  <Layout className="home" seo={{ title: 'Svelto', titleTemplate: '%s' }}>
    <img className="logo" src="/static/images/logo.png" title="Logo" />
    <Button className="circular demo" href="//demo.getsvelto.com">DEMO</Button>
    <Button className="circular docs" href="/docs">DOCS</Button>
  </Layout>
);

/* EXPORT */

export default Index;
