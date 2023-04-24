import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai';

const OfferCall = () => {
  return (
    <section className='offer-call-sec'>
        <div className="container">
            <div className="offer-view">
                <div className="bg">
                    <img src="media/images/banner/offerbg.png" alt="" />
                </div>
                <div className="content" style={{color: "white"}}>
                    <div className="left">
                        <div className="store-name"><p>BOOKWORM STORE</p></div>
                        <div className="offer-txt">
                        <h5 className='txt title-txt'>story books for kids</h5>
                        <p className='txt desc-txt'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisituimuro nisi ut aliquip ex</p>
                        </div>
                        <div className="call-btn">
                            <Link className='btn'>Check now  <AiOutlineArrowRight className='btn-icon'/></Link>
                        </div>
                    </div>
                    <div className="right">
                        <img src="media/images/banner/vector.svg" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default OfferCall