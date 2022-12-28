import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';
import Worksswiper from './component/Swiper';
import Preinterview from './component/Preinterview'
import Footer from './component/Footer'


function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper contentid="mainswiper"></Worksswiper>  
      <Worksswiper contentid="subswiper" title="BEST PHOTO" subtitle="노을필름에서 가장 인기있는 사진을 소개합니다."></Worksswiper>    
      <Preinterview contentid="me" objnm="noticeObj" title="아닐껄아마도?"></Preinterview>
      <Preinterview contentid="preInterview" objnm="preinterview" title="사전인터뷰"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
