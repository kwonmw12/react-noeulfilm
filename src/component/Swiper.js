import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid, EffectCoverflow } from 'swiper';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Worksswiper = (props) => {
  useEffect(() => {
    AOS.init({
        duration : 1000
    });
})
    const swiperinfo = swiperDBlink[props.objnm];
      return(
        <section data-aos="zoom-in" className="section text-center" id={props.contentid}>
          <h3 data-aos="fade-right" className='swiper_h3'>{props.title}</h3>
          <p data-aos="fade-left" className='swiper_p'>{props.subtitle}</p>
          <Swiper className='workSection'
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid, EffectCoverflow]}
          breakpoints={{
            768:{
              slidesPerView:1             
              },
            1024:{
              slidesPerView:props.view
              }
          }}
          grid={props.gridrow}
          spaceBetween={props.between}
          centeredSlides={true}
          
          effect={props.cover}
          coverflowEffect={props.effect}
          autoplay={props.delay}
          loop = {true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => {
          }}
          onSwiper={(swiper) => console.log(swiper)}>
          
          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    <SwiperSlide className={item.cls} key={'sw'+index} style={{ backgroundImage : item.bg}}>{item.worktitle}</SwiperSlide>
                   )
              }
            )
          }
          </Swiper>
        </section>
          
      )
  }
  
  export default Worksswiper;