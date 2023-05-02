import React, { useEffect } from 'react'
import PrdDetailsWrapper from '../components/PrdDetailsWrapper'
import ProductDetailsTab from '../components/ProductDetailsTab'

const ProductDetails = () => {
  useEffect(()=>{
    console.log("rerender")
  })
  return (
    <section className='product-details-sec'>
      <div className="container">
        <div className="main-col col">
          <PrdDetailsWrapper/>
          <ProductDetailsTab />
        </div>
        <div className="side-col col">
          tet
          <div className="recommendation">

          </div>
          <div className="offers">

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails