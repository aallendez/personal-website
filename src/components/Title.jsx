
const Title = ({ theme }) => {
  return(
      <div id="title" className="h-screen w-full flex sm:px-12 flex-col items-center justify-center text-center transition-all">
        <h1 className="text-[70px] sm:text-[45px]">Juan<br className='hidden sm:block' /> Alonso-Allende</h1>
        <div className='flex flex-row gap-10 sm:gap-0 h-16 items-center group'>
          <p className="peer long-transition h-full flex items-center">Full Stack Developer</p>
          <p className="peer long-transition h-full flex items-center">Artificial Intelligence</p>
          <p className="peer long-transition h-full flex items-center">Business Enthusiast</p>
        </div>
        
      </div>
  );
}



export default Title;

