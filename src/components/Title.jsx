import juan_logo from '../assets/juan_logo.gif';
import juan_logo_w from '../assets/juan_logo_w.gif';
import BlurIn from './BlurIn';

const Title = ({ theme }) => {
  const qualities = (
    <div className='flex flex-row gap-10 sm:gap-2 h-16 items-center group'>
      <p className="peer long-transition h-full flex items-center">Full Stack Developer</p>
      <p className="peer long-transition h-full flex items-center">Artificial Intelligence</p>
      <p className="peer long-transition h-full flex items-center">Business Enthusiast</p>
    </div>

  );
  return(
      <div id="title" className="h-screen w-full flex sm:px-12 flex-col items-center justify-center text-center transition-all">
        <BlurIn word="Juan Alonso-Allende" className="text-[70px] sm:text-[35px] font-bold" />
        <div className='flex flex-row gap-10 sm:gap-0 h-16 items-center group'>
          <BlurIn word={qualities} />
        </div>
      </div>
  );
}



export default Title;

