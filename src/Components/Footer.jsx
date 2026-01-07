import logo from '../assets/logo.png';
import facebookIcon from '../assets/facebook.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';

const Footer = () => {
    return (
        <footer className="bg-[#021429] text-white py-10 px-4 md:px-16 mt-auto">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 gap-6">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="HERO.IO" className="h-8" />
                        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#642de3] to-[#9f62f2] bg-clip-text text-transparent">
                            HERO.IO
                        </span>
                    </div>

                   
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <h6 className="text-sm font-semibold uppercase tracking-wider text-white">Social Links</h6>
                        <div className="flex gap-4">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6 brightness-0 invert" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 brightness-0 invert" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 brightness-0 invert" />
        </a>
                        </div>
                    </div>
                </div>

              
                <div className="text-center pt-8">
                    <p className="text-sm text-gray-500 font-medium">
                        Copyright © 2025 - All right reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;