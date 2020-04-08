import React from "react";
import Layout from "../components/common/Layout";
import Error from "../components/Error/Error";

const NotFoundPage: React.FC = () => (
  <Layout showSidebar={false}>
    <Error />
  </Layout>
);
    
export default NotFoundPage;
