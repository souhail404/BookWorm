import React, { useState } from 'react'

const ProductDetailsTab = () => {
    const [toggelState , setToggleState] = useState(1);
  return (
    <div className="details-tab">
        <ul className="tablinks">
            <li className={`tablink-btn ${toggelState === 1?"active":null}`} onClick={()=>setToggleState(1)}>Description</li>
            <li className={`tablink-btn ${toggelState === 2?"active":null}`} onClick={()=>setToggleState(2)}>Details</li>
            <li className={`tablink-btn ${toggelState === 3?"active":null}`} onClick={()=>setToggleState(3)}>Testimonials</li>
            <li className={`tablink-btn ${toggelState === 4?"active":null}`} onClick={()=>setToggleState(4)}>Author</li>
        </ul>
        <div className="tabcontent">
            <div className="tab" hidden={toggelState !==1}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto delectus minima nulla, enim incidunt est harum molestias ullam error ipsum quae aspernatur consequuntur modi repellat, sequi, illo maxime exercitationem.</p>
            </div>
            <div className="tab" hidden={toggelState !==2}>
                <p>details</p>
            </div>
            <div className="tab" hidden={toggelState !==3}>
                <p>testimonials</p>
            </div>
            <div className="tab" hidden={toggelState !==4}>
                <p>Author</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsTab