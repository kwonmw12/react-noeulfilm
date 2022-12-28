import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


const Worksswiper = (props) => {
    const swiperinfo = swiperDBlink[props.contentid];
      return(
        <section className="section text-center" id={props.contentid}>
          <h3>{props.title}</h3>
          <p>{props.subtitle}</p>
          <Swiper className='workSection'
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            768:{
              slidesPerView:1             
              },
            1024:{
              slidesPerView:1.5
              }
          }}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
          delay: 1000000000,
          disableOnInteraction: false,
          }}
          loop = {true} 
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => {
          //슬라이드가 끝나고 실행
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