import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel from '../../Components/Carousel/Carousel'
import Category from '../../Components/Category/Category'
import Category2 from '../../Components/Category2/Category2';
import Product from '../../Components/Product/Product'
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Category2 />
      <Product />
    </Layout>
  );
}

export default Landing