import React from 'react'
import Banners from '../components/Banners'
import BookCategoriesListings from '../components/BookCategoriesListings'
import OfferCall from '../components/OfferCall'

const Home = () => {
  return (
    <>
      <Banners />
      <BookCategoriesListings />
      <OfferCall />
      <BookCategoriesListings />
      <BookCategoriesListings />
      <OfferCall />
      <BookCategoriesListings />
    </>
  )
}

export default Home