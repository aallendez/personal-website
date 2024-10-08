import juan from '../assets/juan.png';
import { MenuIcon, CloseIcon } from '../assets/Icons';
import { useState } from 'react';


const BurgerMenu = ({ theme, toggleTheme, iconColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="fixed top-0 right-0 h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-color-7 z-20 shadow-lg">
          <div className='flex flex-col items-center my-10 gap-24 text-[40px] animate-fade-in overflow-auto w-full'>
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
      <div className={`sm:hidden group fixed h-[90px] w-full z-30 left-0 px-32 md:px-10 sm:px-10 xs:px-10 flex flex-row items-center justify-center gap-10 ${theme === "dark" ? "bg-black" : "bg-green-50"} bg-opacity-50 backdrop-blur-md`} style={theme === "dark" ? { borderBottom: '1px solid rgba(245, 238, 230, .5)' } : { borderBottom: '1px solid rgba(0, 0, 0, .3)' }}>
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
    </>
  );
} 

export default Header; 
