import React from 'react';
import Layout from '../../components/Layout';
import Overview from './overview/overview';
import Discover from './discover/discover';
import Spacer from '../../components/Spacer';
import { title } from './index.md';

class HomePage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div>
          <Overview />
          <Spacer value={8} />
          <Discover />
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
