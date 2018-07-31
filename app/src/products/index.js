import React from 'react';
import Layout from '../../components/Layout';
import Overview from './overview/overview';
import Brackets from './brackets/brackets';
import Kits from './kits/kits';
import Structures from './structures/structures';
import Spacer from '../../components/Spacer';
import { title } from './index.md';

class ProductsPage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div>
          <Overview />
          <Spacer value={8} />
          <Brackets />
          <Spacer value={8} />
          <Kits />
          <Spacer value={8} />
          <Structures />
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }
}

export default ProductsPage;
