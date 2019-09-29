import React from 'react';
import Layout from '../components/common/Layout';
import Error from '../components/Error/Error';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout showSidebar={false}>
        <Error />
      </Layout>
    );
  }
}

export default NotFoundPage;
