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
      <Worksswiper></Worksswiper>      
      <Preinterview contentid="me" objnm="noticeObj"  title="공지사항"></Preinterview>
      <Preinterview contentid="preInterview" objnm="preinterview" title="사전인터뷰"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
