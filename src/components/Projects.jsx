import larocket_web from '../assets/larocket_web.png';
import Zeffo from '../assets/Zeffo.png';
import Nokia from '../assets/Nokia.png';
import chatbot_larocket from '../assets/chatbot_larocket.png';
import euro2024 from '../assets/euro2024.jpeg';
import { ReactIcon } from '../assets/Icons';
import WordPullUp from './WordPullUp';
import crickleCreek from '../assets/crickleCreek.png';
import BlurIn from './BlurIn';

const ProjectInfo = [
    {
        title:"Subscription Flow for Coffee Brand",
        img: crickleCreek,
        description: "I developed a subscription flow for a coffee brand in which users can discover their best coffee fit and order.",
        report: "",
        link: "https://www.cricklecreekcoffee.com",
        stack: ["React", "TailwindCSS", "ShopifyAPI", "GraphiQL"],
        date: "August 2024"
    },
    {
        title:"ML Related Project",
        img: euro2024,
        description: "I'm a football fan and my team, Spain, reached the final. I used my machine learning knowledge to predict the outcome of the final.",
        report: "",
        stack: ["Python", "Machine Learning"],
        date: "July 2024"
    },
    {
        title:"Proof of Concept Design for a Pitch",
        img: Nokia,
        description: "After working with react for about a month, I decided to challenge myself and create a proof of concept design for a pitch with React in less than a week.",
        report: "",
        stack: ["React", "TailwindCSS"],
        date: "June 2024"
    },
    {
        title: "Zeffo AI Audits",
        img: Zeffo,
        description: "I created a tailored web scraper and fine tuned llm to produced quality audits for eccomerce websites.",
        report: "I created AI.",

        stack: ["React", "TailwindCSS", "MongoDB", "Python"],
        date: "May 2024",
    },
    {
        title: "LaRocket RAG ChatBot",
        img: chatbot_larocket,
        description: "I created a customer service chatbot for LaRocket.",
        report: "I created the website for a rocketstove brand.",
        link: "https://www.larocket.es",
        stack: ["HTML", "CSS", "JavaScript", "Python"],
        date: "March 2024",
    },
    {
        title: "LaRocket Website",
        img: larocket_web,
        description: "I created the website for a rocketstove brand.",
        report: "I created the website for a rocketstove brand.",
        link: "https://www.larocket.es",
        stack: ["HTML", "CSS", "JavaScript"],
        date: "February 2024",
    },
];

const StackComponent = ({ stack, filterList }) => {
    const handleFilter = () => {
        filterList.push(...stack);  
    };

    return(
        <button class="rounded-full text-xs px-3 py-2 w-auto flex flex-row bg-green-500 hover:bg-green-400 font-[Sora] transition-all">
            <h1>{stack}</h1>
        </button>
    );
};

const Project = ({ title, img, description, report, link, iconColor, stack, date, filterList }) => {
    const ShareIcon = (
        <svg viewBox="0 0 24 24" className="w-[25px] " fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>
    );

    return (
        <>
            <a href={link} target='_blank'>
                <div className={`flex w-[900px] px-20 sm:px-4 opacity-60 hover:opacity-100 h-auto flex-row xs:flex-col sm:flex-col md:flex-col items-start md:w-[350px] sm:items-start text-center justify-center my-16 sm:my-24 xs:my-24 gap-10 rounded-3xl transition-all ${link ? "cursor-pointer" : ""} peer long-transition group`} >
                    <img
                        src={img}
                        alt={title}
                        className="sm:min-w-full xs:min-w-full md:min-w-full min-w-[300px] md:h-[200px] h-[150px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    />
                    <div className="text-left flex flex-col w-2/3 md:w-full h-[150px] items-start justify-start">
                        <div className="text-2xl flex flex-row sm:items-start gap-2 w-full sm:text-[22px]">
                            <h1 className='font-bold min-w-1/2 md:w-full'>{title}</h1>
                            <p className="my-2 font-light opacity-70 min-w-[80px] text-xs">{date}</p>
                            <div className={`transition-transform transform ${link ? "group-hover:translate-x-1 group-hover:-translate-y-1" : "hidden"} flex `}>
                                {ShareIcon}
                            </div>    
                        </div>
                        <p className="my-2 font-light opacity-70 text-sm sm:text[10px] font-[Sora]">{description}</p>
                        <div className='flex flex-row flex-wrap gap-4 mt-auto w-full'>
                            {stack.map((stack) => (
                                <StackComponent stack={stack} filterList={filterList}/>     
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
};

const Projects = ({ iconColor }) => {
    const ShareIcon = (
        <svg viewBox="0 0 24 24" className="w-[25px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>
    );

    const filterList = [

    ];

    const divider = (
        <div></div>
    );

    const CTA = (
        <div className='flex flex-row items-center justify-center mt-20 mb-24 group gap-2'>
            <a className=' text-lg opacity-80 w-full text-center cursor-pointer group-hover:opacity-100 transition-all'>See all projects</a>
            <div className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'>
                {ShareIcon}
            </div>
        </div>
    );

    return (
        <div id="projects" className="pt-32 relative min-h-screen h-auto w-full flex flex-col items-center justify-center">

            <WordPullUp words="🍳 Recent Projects" className="text-[35px] sm:text-[24px] font-bold w-full text-left mb-6" />
            <div className='flex flex-col items-start md:items-center sm:items-center xs:items-center justify-center sm:px-2 xs:px-0 w-auto mb-32'>
                {/* <BlurIn word={divider} className={`${iconColor==="#000000" ? "bg-black" : "bg-white"} w-full h-[1px] my-6 md:w-3/4 opacity-80`} /> */}
                {ProjectInfo.map((project) => (
                    <BlurIn key={project.title} word={
                        <Project
                            title={project.title}
                            img={project.img}
                            description={project.description}
                            report={project.report}
                            link={project.link}
                            iconColor={iconColor}
                            stack={project.stack}
                            date={project.date}
                            filterList={filterList}
                        />
                    } />
                ))}
            </div>
            {/* <BlurIn word={CTA} className="" /> */}
        </div>
    );
};

export default Projects;