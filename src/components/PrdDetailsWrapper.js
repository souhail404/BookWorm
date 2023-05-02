import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
const PrdDetailsWrapper = () => {
  return (
    <div className="product-details-wrapper">
        <div className="image pdw-c">
            <div className="image-wrapper">
                <img src="media/images/books/book4.jpg" alt="" />
            </div>
        </div>
        <div className="infos pdw-c">
            <div className="infos-wrapper">
                <div className="el author">
                    <Link className='txt'>By <span>L.J. Shen</span> </Link>
                </div>
                <div className="el name">
                    <h2 className='txt'>Dark in Death: An Eve Dallas Novel</h2>
                </div>
                <div className="el rating">
                    <Rating rate='3.8' />
                    <Link className="r-raters">(38)</Link>
                </div>
                <div className="el price">
                    <p className='curprice txt'>49.00 $</p>
                    <p className='oldprice txt'>63,00 $</p>
                </div>
                <div className="el mini-desc">
                    <p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum ipsam architecto cupiditate aperiam ipsa nobis corporis suscipit nemo quasi.</p>
                </div>
                <div className="el cta">
                    <button className='addtcart'>Add to cart</button>
                    <button className='addtwishlist'><MdOutlineFavoriteBorder/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrdDetailsWrapper