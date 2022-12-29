import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/grid";


import Header from './component/Hd';
import Worksswiper from './component/Swiper';
import Review from './component/Review';
import Footer from './component/Footer';
import Mdpick from './component/Mdpick';


function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper contentid="mainbanner" objnm="mainsection" delay={{
          delay:3000,
          disableOnInteraction: false,
          }} view="1.3" rows={false} ></Worksswiper>  
      
      <Worksswiper contentid="bestphoto" objnm="bestphoto" delay={{
          delay:3000,
          disableOnInteraction: false,
          }} gridrow={{rows: 2,}} view="5" between="30" title="BEST PHOTO" subtitle="노을필름에서 가장 인기있는 사진을 소개합니다." ></Worksswiper>

      <Worksswiper contentid="gallery" objnm="gallery" delay={{
          delay:3000,
          disableOnInteraction: false,
          }} view="4" rows={false} cover="coverflow" effect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }} title="GALLERY" subtitle="노을 필름의 갤러리"></Worksswiper>


      <Mdpick></Mdpick>
      <Review contentid="review" objnm="review" title="REVIEW" subtitle="노을필름을 이용해주신 고객님들의 리뷰입니다."></Review>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
