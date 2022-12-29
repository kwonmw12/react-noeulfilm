const Footer = () =>{
    return(
      <footer className="py-4 border-top bg-dark text-white ">
        <ul className="text-center d-flex justify-content-center">
          <li><a href="#none" className="px-5 text-white">개인정보처리방침</a></li>
          <li><a href="#none" className="px-5 text-white">이용약관</a></li>
          <li><a href="#none" className="px-5 text-white">회사소개</a></li>
        </ul>
        <ul className="d-flex justify-content-center">
          <li className="px-5">대표자 : 권민우</li>
          <li className="px-5">사업자 등록번호 : xxx-xx-30071</li>
        </ul>
        
        <ul className="d-flex justify-content-center">
          <li className="px-5 "><a href=""><img src="/img/insta.png" alt="insta" /></a></li>
          <li className="px-5"><a href=""><img src="/img/kakao.png" alt="kakao" /></a></li>
          
        </ul>
      </footer>
    )
  }

export default Footer;