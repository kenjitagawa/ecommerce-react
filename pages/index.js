import React from 'react'

import {Product, FooterBanner, HeroBanner} from '../components';
import {client, Client} from '../lib/client'

const Home = ({ products, banner}) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]}/>


      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Most Requested</p>

      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>


      <FooterBanner footerBanner={banner && banner[0]}/>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const queryBanner = '*[_type == "banner"]'
  const banner = await client.fetch(queryBanner)

  return {
    props: {products, banner}
  }
}
export default Home