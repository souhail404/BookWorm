import React from 'react'
import Banners from '../components/Banners'
import BookCategoriesListings from '../components/BookCategoriesListings'
import OfferCall from '../components/OfferCall'
import BookInlineListing from '../components/BookInlineListing'

const Home = () => {
  return (
    <>
      <Banners />
      <BookCategoriesListings />
      <OfferCall />
      <BookInlineListing />
      <BookInlineListing />
      <BookInlineListing />
      
    </>
  )
}

export default Home