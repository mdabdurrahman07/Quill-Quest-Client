import logo from '../../public/logos/logo-no-background.png'
const Footer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img src={logo}  className="w-16 inline-block" alt="" />
    <p className='text-xl font-medium'>QuillQuest<br/>Providing Book services since 2023</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;