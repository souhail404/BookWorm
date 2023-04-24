import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';


const BookInlineListing = () => {
    const carousel = useRef()
    const moveBtnRight =useRef()
    const moveBtnLeft =useRef()

    const handleScrollRight = ()=>{
        console.log(carousel.current.scrollLeft)
        carousel.current.scrollLeft = carousel.current.scrollLeft + 150;
    }
    const handleScrollLeft = ()=>{
        console.log(carousel.current.scrollLeft)
        carousel.current.scrollLeft = carousel.current.scrollLeft - 150;
    }
    useEffect(()=>{
        const checkCarouselStartEnd = ()=>{
            const condition =carousel.current.offsetWidth + carousel.current.scrollLeft - carousel.current.scrollWidth;
            if(condition < 1 && condition > -1){
                console.log('come to end')
                moveBtnRight.current.classList.add('noactive');
            }
            else{
                console.log('not end')
                moveBtnRight.current.classList.remove('noactive');
            }
            if(carousel.current.scrollLeft < 1){
                console.log('come to start')
                moveBtnLeft.current.classList.add('noactive');
            }
            else{
                console.log('not start')
                moveBtnLeft.current.classList.remove('noactive');
            }
        }
        checkCarouselStartEnd()
        carousel.current.addEventListener('scroll',()=>{
            checkCarouselStartEnd()
        })
        return (
            carousel.current.removeEventListener('scroll',()=>{
                checkCarouselStartEnd()
            })
        )
    },[carousel])
  return (
    <section className='inline-listing'>
        <div className="container">
            <div className="sec-header">
                <p className="el slogan">shop online</p>
                <h3 className="el categorie-name">Historical Books</h3>
                <Link className='el categorie-link'><p>View all</p> <AiOutlineArrowRight className='btn-icon'/></Link>
            </div>
            <div className="sec-content">
                <div className="carousel-wrapper" ref={carousel}>  
                    <div className="move-btn move-right-btn" ref={moveBtnRight} onClick={()=>handleScrollRight()}><AiOutlineRight/></div>
                    <div className="move-btn move-left-btn" ref={moveBtnLeft} onClick={()=>handleScrollLeft()} ><AiOutlineLeft/></div>
                    <Link className="book-card">
                        <div className="data-wrapper">
                            <div className="img">
                                <img src="media/images/books/book5.jpg" alt="" />
                            </div>
                            <div className="details">
                                <p className="author">JAMES HOFFMAN</p>
                                <Link><h5 className="book-name">Renaissance History</h5></Link> 
                            </div>
                        </div>
                    </Link>
                    <Link className="book-card">
                        <div className="data-wrapper">
                            <div className="img">
                                <img src="media/images/books/book2.jpg" alt="" />
                            </div>
                            <div className="details">
                                <p className="author">JANE DOE</p>
                                <Link><h5 className="book-name">Summertime Love Stories</h5></Link> 
                            </div>
                        </div>
                    </Link>
                    <Link className="book-card">
                        <div className="data-wrapper">
                            <div className="img">
                                <img src="media/images/books/book1.jpg" alt="" />
                            </div>
                            <div className="details">
                                <p className="author">JAMES HOFFMAN</p>
                                <Link><h5 className="book-name">Amster Hamster Trip</h5></Link> 
                            </div>
                        </div>
                    </Link>
                    <Link className="book-card">
                        <div className="data-wrapper">
                            <div className="img">
                                <img src="media/images/books/book4.jpg" alt="" />
                            </div>
                            <div className="details">
                                <p className="author">JOHN STRASS</p>
                                <Link><h5 className="book-name">Winter Darkest Tragedy</h5></Link> 
                            </div>
                        </div>
                    </Link>
                    <Link className="book-card">
                        <div className="data-wrapper">
                            <div className="img">
                                <img src="media/images/books/book8.jpg" alt="" />
                            </div>
                            <div className="details">
                                <p className="author">jane doe</p>
                                <Link><h5 className="book-name">Love Stories From Paris</h5></Link> 
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>  
  )
}

export default BookInlineListing