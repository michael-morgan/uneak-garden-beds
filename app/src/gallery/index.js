import React from 'react';
import Layout from '../../components/Layout';
import Overview from './overview/overview';
import Creations from './creations/creations';
import Spacer from '../../components/Spacer';
import { title } from './index.md';

class GalleryPage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div>
          <Overview />
          <Spacer value={8} />
          <Creations />
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }
}

export default GalleryPage;
