import { GithubIcon, LinkedinIcon, TwitterIcon, ReactIcon } from '../assets/Icons';
import BlurIn from './BlurIn';

const Footer = ({ iconColor }) => {
  const links = (
    <div className='flex flex-row items-center justify-center gap-10 w-full'>
      <a href='https://github.com/aallendez' className='hover:opacity-80 transition-all' target='_blank' rel='noopener noreferrer'>
        <GithubIcon color={iconColor}/>
      </a>
      <a href='https://linkedin.com/in/jaallende' className='hover:opacity-80 transition-all' target='_blank' rel='noopener noreferrer'>
          <LinkedinIcon color={iconColor}/>
      </a>
      <a href='https://twitter.com/mrallendez' className='hover:opacity-80 transition-all' target='_blank' rel='noopener noreferrer'>
          <TwitterIcon color={iconColor}/>
      </a>
    </div>
  );

    return(
      <BlurIn word={links} />
    );
}

export default Footer;