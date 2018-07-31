import React from 'react';
import Layout from '../../components/Layout';
import Overview from './overview/overview';
import How from './how/how';
import Features from './features/features';
import Watch from './watch/watch';
import Spacer from '../../components/Spacer';
import { title } from './index.md';

class InfoPage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div>
          <Overview />
          <Spacer value={8} />
          <How />
          <Spacer value={8} />
          <Watch />
          <Spacer value={8} />
          <Features />
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }
}

export default InfoPage;
