import React from 'react';
import Layout from '../../components/Layout';
import Overview from './overview/overview';
import Design from './design/design';
import Details from './details/details';
import Spacer from '../../components/Spacer';
import { title } from './index.md';

class DesignPage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div>
          <Overview />
          <Spacer value={8} />
          <Design />
          <Spacer value={8} />
          <Details />
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }
}

export default DesignPage;
