import logo from '../../public/logos/logo-no-background.png'
import facebook from '../../public/assets/social/facebook.png'
import insta from '../../public/assets/social/insta.png'
import x from '../../public/assets/social/twitter.png'
const Footer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img src={logo}  className="w-16 inline-block" alt="" />
    <p className='text-xl font-medium'>QuillQuest<br/>Providing Book services since 2023</p>
  </aside> 
  <nav>
    <header className="footer-title text-lg font-bold">Services</header> 
    <a className="link link-hover text-base font-semibold">Custom Cover Printing</a> 
    <a className="link link-hover text-base font-semibold">Books Club</a> 
    <a className="link link-hover text-base font-semibold">Book Recommendations</a> 
    <a className="link link-hover text-base font-semibold">Author </a>
  </nav> 
  <nav>
    <header className="footer-title text-lg font-bold">Company</header> 
    <a className="link link-hover text-base font-semibold">About us</a> 
    <a className="link link-hover text-base font-semibold">Contact</a> 
    <a className="link link-hover text-base font-semibold">Jobs</a> 
    <a className="link link-hover text-base font-semibold">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-lg font-bold">Legal</header> 
    <a className="link link-hover text-base font-semibold">Terms of use</a> 
    <a className="link link-hover text-base font-semibold">Privacy policy</a> 
    <a className="link link-hover text-base font-semibold">Cookie policy</a>
  </nav>
 <aside>
 <p className='text-center text-lg font-bold'>Copyright © 2023 - All right reserved by QuillQuest</p>
 </aside>
 <div className='flex justify-center items-center gap-3'>
  <img src={facebook} alt="" />
  <img src={insta} alt="" />
  <img src={x} alt="" />
 </div>
</footer>
        </div>
    );
};

export default Footer;