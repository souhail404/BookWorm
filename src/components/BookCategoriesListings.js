import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai';

const BookCategoriesListings = () => {
  return (
    <section className='categorie-listing'>
        <div className="container">
            <div className="sec-header">
                <p className="slogan">shop online</p>
                <h3 className="categorie-name">Latest books online</h3>
                <p className="mini-desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisituimuro nisi ut aliquip ex</p>
            </div>
            <div className="sec-content">
                <div className="products-wrapper">
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book1.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">james random</p>
                            <Link><h5 className="book-name">Amster Hamster Trip</h5></Link> 
                            <p className="price">19,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book8.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">JANE DOE</p>
                            <Link><h5 className="book-name">Love Stories From Paris</h5></Link> 
                            <p className="price">22,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book7.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">JAMES HOFFMAN</p>
                            <Link><h5 className="book-name">Symphony Of Trilogy</h5></Link> 
                            <p className="price">190,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book2.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">JANE DOE</p>
                            <Link><h5 className="book-name">Summertime Love Stories</h5></Link> 
                            <p className="price">33,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book3.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">ADAM STRASS</p>
                            <Link><h5 className="book-name">Fantasy Storytelling</h5></Link> 
                            <p className="price">29,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book4.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">JOHN STRASS</p>
                            <Link><h5 className="book-name">Winter Darkest Tragedy</h5></Link> 
                            <p className="price">38,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book5.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">JAMES HOFFMAN</p>
                            <Link><h5 className="book-name">Renaissance History</h5></Link> 
                            <p className="price">30,00$</p>
                        </div>
                    </Link>
                    <Link className="book-wrapper">
                        <div className="img-wrapper">
                            <img src="/media/images/books/book6.jpg" alt="" />
                            <div className="hover-slide">
                                <p>View details &nbsp; <AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <p className="author">JOHN STRASS</p>
                            <Link><h5 className="book-name">Japan Travel Stories</h5></Link> 
                            <p className="price">56,00$</p>
                        </div>
                    </Link>          
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookCategoriesListings