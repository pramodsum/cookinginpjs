import React from 'react'
import Layout from '../components/Layout'
import Error from '../components/Error/Error';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} showSidebar={false} >
        <Error />
      </Layout>
    )
  }
}

export default NotFoundPage
