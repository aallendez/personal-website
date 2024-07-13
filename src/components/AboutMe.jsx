import { TailwindIcon, ReactIcon, PythonIcon, MongoDBIcon, PremiereProIcon, AfterEffectsIcon, PhotoshopIcon, ZapierIcon } from "../assets/Icons";

const AboutMe = ({ iconColor }) => {
    return(
      <div id="aboutMe" className="pt-32 w-full min-h-screen flex flex-row sm:flex-col text-center gap-20 items-start px-16" >
        <div className="w-full group">
          <div className="pb-6">
            <h3 className='text-3xl font-bold'>My Tech Stack</h3>
            <div className='flex flex-col items-start justify-center my-10'>
              <div className="w-full flex flex-row gap-6 justify-between my-2">
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>React</p>
                  <div className="mt-auto"><ReactIcon color={iconColor} /></div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>Python</p>
                  <div className="mt-auto"><PythonIcon color={iconColor} /></div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>MongoDB</p>
                  <div className="mt-auto"><MongoDBIcon color={iconColor} /></div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>Tailwindcss</p>
                  <div className="mt-auto"><TailwindIcon color={iconColor} /></div>
                </div>
              </div>         
            </div>
          </div>
          <div className="py-6 ">
            <h3 className='text-3xl font-bold'>Aditional Skills</h3>
            <div className='flex flex-col items-start justify-center my-10'>
              <div className="w-full flex flex-row gap-6 justify-between my-2">
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>Premiere Pro</p>
                  <div className="mt-auto"><PremiereProIcon color={iconColor} /></div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>Photoshop</p>
                  <div className="mt-auto"><PhotoshopIcon color={iconColor} /></div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>After Effects</p>
                  <div className="mt-auto"><AfterEffectsIcon color={iconColor} /></div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 peer long-transition">
                  <p>Zapier</p>
                  <div className="mt-auto"><ZapierIcon color={iconColor} /></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="">
            <p className="text-left" style={{lineHeight: '2'}} >
            <p className="text-3xl mb-2 font-bold">Hi! I'm Juan.</p><br />I'm a Full Stack Developer, AI enthusiast and Businessman. I am also a Computer Science & Artificial Intelligence in Spain. 
            <br />I've always considered myself to be curious. When I was 13 years old, I started shooting and editing videos and eventually got pretty good at it. I also play the guitar, and got a lot into music production. However, since 2023 I am deeply involved in <strong className="hover:opacity-80 transition-opacity">software development</strong> and <strong className="hover:opacity-80 transition-opacity">artificial intelligence</strong>.
            <br /><br />I love creating software that delivers value to businesses and provides a great user experience. I am also passionate about using the data we collect from these products to improve and iterate.
            <br /><br />I am a project-based learning person. That's why I continuously want to develop cool projects in different areas. I decided to fit them all into <strong className="hover:opacity-80 transition-opacity">ARKANIS PROJECTS</strong>, the name under which I develop all my projects.
            <br /><br />If you want to talk about any project, idea or topic, feel free to contact me. I'm always excited to meet new people and learn new things.
            </p>
        </div>
        
      </div>
    );
  
}

export default AboutMe;