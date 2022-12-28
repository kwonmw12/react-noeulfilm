import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper';


const Worksswiper = (props) => {
    const swiperinfo = swiperDBlink[props.contentid];
      return(
        <section className="section text-center" id={props.contentid}>
          <h3 className='swiper_h3'>{props.title}</h3>
          <p className='swiper_p'>{props.subtitle}</p>
          <Swiper className='workSection'
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
          breakpoints={{
            768:{
              slidesPerView:1             
              },
            1024:{
              slidesPerView:props.view
              }
          }}
          grid={{rows:props.rows}}
          spaceBetween={0}
          centeredSlides={true}
          
          autoplay={{
          delay:props.delay,
          disableOnInteraction: false,
          }}
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