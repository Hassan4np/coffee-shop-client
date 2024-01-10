import logo from "../../../assets/logo/damiun coffee shop 1.png"

const Footer = () => {
    return (
        <div className="-mt-5">
            <footer className="footer p-10 bg-[#2B2B2B]">
                <aside>
                    <img src={logo} alt="" />
                    <p>damiun@coffee.co.id</p>
                    <p>(+62) 821-0000-9090</p>
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