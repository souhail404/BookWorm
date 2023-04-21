import React, { useEffect, useRef } from 'react'
import data from '../data/data.json'

const Banners = () => {
    const dataBanners = data.banners;
    const sliders = useRef(new Array())
    const labels = useRef(new Array())

    const nextSlide = ()=>{
            const slidersR= sliders.current;
            const labelsR = labels.current;

            let currentSlideIndex=0;

            slidersR.map((slider , index)=>{  
                if(slider.classList.contains('active')){
                    if(index == slidersR.length-1){
                        currentSlideIndex = 0;
                    }
                    else{
                        currentSlideIndex=index+1;
                    }
                    slider.classList.remove('active');
                }
                labelsR[index].classList.remove('active');
            })


            labelsR[currentSlideIndex].classList.add('active');
            slidersR[currentSlideIndex].classList.add('active');
    }

    const handleLabelClick = (i)=>{
        const slidersR= sliders.current;
        const labelsR = labels.current;

        slidersR.map((slider, index)=>{
            slider.classList.remove('active');
            if(index==i){
                slider.classList.add('active')
            }
        })

        labelsR.map((label, index)=>{
            label.classList.remove('active');
            if(index==i){
                label.classList.add('active')
            }
        })
    }

    const handleRightClick = ()=>{

        const slidersR= sliders.current;
        const labelsR = labels.current;
        
        let currentSlideIndex = 0;
        let nextSlideIndex = 0;
        
        slidersR.map((slider , index)=>{  
            if(slider.classList.contains('active')){
                if(index == slidersR.length-1){
                    currentSlideIndex = index;
                    nextSlideIndex = 0;
                }
                else{
                    currentSlideIndex = index;
                    nextSlideIndex = index + 1;
                }
            }
        })
        slidersR[currentSlideIndex].classList.remove('active');
        slidersR[nextSlideIndex].classList.add('active');

        labelsR[currentSlideIndex].classList.remove('active');
        labelsR[nextSlideIndex].classList.add('active');
    }
    
    const handleLeftClick = ()=>{

        const slidersR= sliders.current;
        const labelsR = labels.current;
        
        let currentSlideIndex = 0;
        let nextSlideIndex = 0;
        
        slidersR.map((slider , index)=>{  
            if(slider.classList.contains('active')){
                if(index == 0){
                    currentSlideIndex = index;
                    nextSlideIndex = slidersR.length -1 ;
                }
                else{
                    currentSlideIndex = index;
                    nextSlideIndex = index - 1;
                }
            }
        })
        slidersR[currentSlideIndex].classList.remove('active');
        slidersR[nextSlideIndex].classList.add('active');

        labelsR[currentSlideIndex].classList.remove('active');
        labelsR[nextSlideIndex].classList.add('active');
    }

    useEffect(()=>{
        
        setInterval(()=>{nextSlide()}, 9000)
        return(
            clearInterval(()=>{nextSlide()}, 9000) 
        )
    })


    return (
        <section className='banners-sec' id="banners-sec">
            <div className="container">
                <div className="banner-view" >
                    {
                        dataBanners.map((img , i)=>{
                            if(i==0){
                                return(
                                    <div key={i} ref={(e)=>{sliders.current.push(e)}} className="banner-wrapper active" data-slide={i}>
                                        <img  className='big-img' src={img.big.src} alt="banner for desktop" />
                                        <img className='small-img' src={img.small.src} alt="banner for phone" />
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div key={i} ref={(e)=>{sliders.current.push(e)}} className="banner-wrapper out" data-slide={i}> 
                                        <img  className='big-img' src={img.big.src} alt="banner for desktop" />
                                        <img className='small-img' src={img.small.src} alt="banner for phone" />
                                    </div>
                                )
                            }
                        })
                    }

                    <div className="labels">
                        {
                            dataBanners.map((img , i)=>{
                                if(i==0){
                                    return(
                                        <span onClick={()=>{handleLabelClick(i)}} key={i} ref={(e)=>{labels.current.push(e)}} className='slide-label active' data-slide={i}></span>
                                     )
                                }
                                else{
                                    return(
                                        <span onClick={()=>{handleLabelClick(i)}} key={i} ref={(e)=>{labels.current.push(e)}} className='slide-label' data-slide={i}></span>
                                     )
                                }
                            })
                        }
                    </div>
                    <div onClick={()=>{handleRightClick()}} className="banner-btn banner-right-btn">
                        <span className='btn r-btn'><img src="media/images/icons/expand-arrow.svg" alt="" /></span>
                    </div>
                    <div onClick={()=>{handleLeftClick()}} className="banner-btn banner-left-btn">
                        <span className='btn l-btn'><img src="media/images/icons/expand-arrow.svg" alt="" /></span>
                    </div>
                </div>

            </div>
        </section>


                
           
    )
}

export default Banners