import juan from '../assets/juan.png';
import juan_logo from '../assets/juan_logo.gif';
import juan_logo_w from '../assets/juan_logo_w.gif';
import { MenuIcon, CloseIcon, LightIcon, NightIcon } from '../assets/Icons';
import { useState } from 'react';
import BlurIn from './BlurIn';
import Footer from './Footer';
import Button from './Button';


const BurgerMenu = ({ theme, toggleTheme, iconColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const verticalOptions = (
    <div className="fixed top-0 right-0 h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-color-7 z-20 shadow-lg animate-fade-in">
      <div className='flex flex-col items-center my-10 gap-16 text-[30px] overflow-auto w-full'>
        <a className=" hover:translate-x-1 cursor-pointer transition-all  " href="#aboutMe">About me...</a>
        <a className=" hover:translate-x-1 cursor-pointer transition-all  " href="#projects">Projects</a>
        <a className=" hover:translate-x-1 cursor-pointer transition-all  " href="mailto:juan@aallende.com?subject=Let's%20chat!">Let's chat!</a>
        <button
          className=" hover:translate-x-1 cursor-pointer transition-all  "
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );

  return (
    <div >
      <div
        onClick={toggleMenu}
        className={`hidden sm:flex rounded-full fixed h-[90px] w-[90px] z-30 right-4 top-4 flex-row items-center justify-center gap-10 ${theme === "dark" ? "bg-black" : "bg-green-50"} bg-opacity-40 backdrop-blur-md`}
        style={
          theme === "dark"
            ? { borderBottom: '1px solid rgba(245, 238, 230, .5)' }
            : { borderBottom: '1px solid rgba(0, 0, 0, .3)' }
        }
      >
        {isOpen===false ? <MenuIcon color={iconColor} /> : <CloseIcon color={iconColor} />}
      </div>

      {isOpen && (
        <BlurIn word={verticalOptions} className="fixed top-0 right-0 h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-color-7 z-20 shadow-lg animate-fade-in" />
      )}
    </div>
  );
};

const Header = ({ theme, toggleTheme, iconColor }) => {
  
  const handleBurger = () => {

  };

  return (
    <>
      <BurgerMenu theme={theme} toggleTheme={toggleTheme} iconColor={iconColor} />
      <div className={`sm:hidden group fixed top-0 h-[90px] w-full z-30 left-0 px-32 md:px-10 sm:px-10 xs:px-10 flex flex-row items-center justify-center gap-10 ${theme === "dark" ? "bg-black" : "bg-green-50"} bg-opacity-50 backdrop-blur-md`} style={theme === "dark" ? { borderBottom: '1px solid rgba(245, 238, 230, .5)' } : { borderBottom: '1px solid rgba(0, 0, 0, .3)' }}>
          {/* <a href="#title" className='mr-auto cursor-pointer transition-all '><img src={theme === 'dark' ? juan_logo_w : juan_logo} alt="Juan" className="w-[80px] h-[80px] rounded-full" /></a> */}
          <button
              className=" hover:translate-x-1 cursor-pointer transition-all  "
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <LightIcon color={iconColor} /> : <NightIcon color={iconColor} />}
          </button>
          <a className=" hover:translate-x-1 cursor-pointer transition-all" href="#aboutMe">About me...</a>
          <a className=" hover:translate-x-1 cursor-pointer transition-all" href="#projects">Projects</a>
          <a className=" hover:translate-x-1 cursor-pointer transition-all" href="mailto:juan@aallende.com?subject=Let's%20chat!">Let's chat!</a>
          {/* <Button
            children={theme === 'dark' ? <LightIcon color={iconColor} /> : <NightIcon color={iconColor} />} 
            classes="none"
            onClick={toggleTheme}
          /> */}
      </div>
    </>
  );
} 

export default Header; 