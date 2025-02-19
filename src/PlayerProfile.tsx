import React, {useEffect, useRef, useState} from 'react';
import noam from './noam.png'
import {Code2, Database, Wrench, X, Menu} from 'lucide-react';
import MiscContent from "./MiscContent";
import {PlayerInfo} from "./types";
import ProfileHeader from "./ProfileHeader";

interface StatBoxProps {
    label: string;
    value: string | number;
}

interface Experience {
    company: string;
    role: string;
    location: string;
    date: string;
    bullets: string[];
}

interface SkillCategory {
    icon: React.ReactNode;
    title: string;
    skills: {
        name: string;
        level?: number;
    }[];
}

interface Project {
    name: string;
    description: string;
    packages: string;
    link: string;
}

const PlayerProfile = () => {
    const [activeTab, setActiveTab] = useState<string>('bio');
    const [isVisible, setIsVisible] = useState(false);
    const experienceRefs = useRef<HTMLDivElement[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (activeTab === 'skills') {
            setIsVisible(true);
        }
    }, [activeTab]);

    useEffect(() => {
        experienceRefs.current = experienceRefs.current.slice(0, experiences.length);
    }, []);

    const scrollToCompany = (index: number) => {
        experienceRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const handleContact = () => {
        try {
            const email = 'ngreenstein3@gmail.com';
            const subject = 'Getting in Touch';
            const body = '';
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } catch (error) {
            console.error('Error opening email client:', error);
            alert('Unable to open email client. Please email me directly at greenstein.n@northeastern.edu');
        }
    };

    const tabs = ['Bio', 'Experience', 'Skills', 'Projects', 'Misc'];

    const playerInfo : PlayerInfo = {
        name: "Noam Greenstein",
        topic1: "Software Engineering",
        topic2: "Data Science"
    };

    const experiences: Experience[] = [
        {
            company: "Indiana Pacers",
            role: "Basketball Analytics Intern",
            location: "Indianapolis, IN",
            date: "Sep. 2024 - Dec. 2024",
            bullets: [
                "Leverage data analysis and machine learning algorithms to generate actionable insights for coaching staff and front office decision-making",
                "Conduct comprehensive research to develop and refine in-game strategies",
                "Design and implement custom software tools to streamline reporting processes and optimize workflow efficiency for coaching and front office personnel"
            ]
        },
        {
            company: "Northeastern Women's Basketball",
            role: "Analytics Assistant",
            location: "Boston, MA",
            date: "Sep. 2023 - Present",
            bullets: [
                "Conduct in-depth analyses of opposing teams, delivering pre-game scouting reports to the head coach",
                "Design and deploy machine learning models to aid team performance and individual player development",
                "Communicate regularly with coaches to best understand team needs and optimize use of analytics"
            ]
        },
        {
            company: "Arizona Cardinals",
            role: "Training Camp Systems Developer Intern",
            location: "Glendale, AZ",
            date: "July 2024 - Aug. 2024",
            bullets: [
                "Updated and enhanced the football operations internal platform to meet the specific needs of coaches, scouts, and front office personnel",
                "Rewrote parts of the platform's backend to optimize site efficiency, significantly reducing code amount and improving overall performance",
                "Developed and optimized database tables, functions, and stored procedures"
            ]
        },
        {
            company: "StockPick",
            role: "Data Engineer",
            location: "Remote",
            date: "June 2024 - July 2024",
            bullets: [
                "Developed a JavaScript data pipeline and implemented data validation mechanisms using HTML5 event listeners, ensuring accurate and efficient data processing for the company's webApp",
                "Optimized data flow mechanisms for automated emails sent to customers"
            ]
        },
        {
            company: "Baltimore Orioles",
            role: "Software Developer Co-Op",
            location: "Baltimore, MD",
            date: "July 2023 - Dec. 2023",
            bullets: [
                "Preformed full stack development using Django and React to create interactive tools and data visualizations on Baseball Operations internal platform to aid player and team evaluations and streamline processes",
                "Developed autonomous scripts and executed data migrations by leveraging AWS Lambda and MS SQL to optimize ETL process for large data sets",
                "Processed, cleaned, and analyzed large data sets (Hawkeye, MLB DSP, Statcast, etc.) to support player and team development initiatives"
            ]
        },
        {
            company: "Khoury College of Computer Sciences",
            role: "Teaching Assistant",
            location: "Boston, MA",
            date: "Sep. 2022 - July 2023",
            bullets: [
                "Lead a bi-weekly lab to help 500+ students (over 10 class units) to learn object-oriented principles",
                "Hosted 6 in person office hours per week to assist students with assignments in Java"
            ]
        },
        {
            company: "Northeastern University",
            role: "Peer Tutor",
            location: "Boston, MA",
            date: "Sep. 2022 - July 2023",
            bullets: [
                "Held individual peer tutoring sessions for the following courses: Fundamentals of Computer Science I & II, Discrete Mathematics, Introduction to Cybersecurity."
            ]
        }
    ];

    const projects: Project[] = [
        {
            name: 'NEU WBB Report Generator',
            description: 'Automated data scraping, machine learning, and report generation process for NEU WBB',
            packages: 'Sklearn, NumPy, Pandas, BeautifulSoup',
            link: 'https://github.com/noamgreenstein/neuwbb'
        },
        {
            name: 'NBA Job Scraper',
            description: 'Built a Job Scraper for all 30 NBA Teams',
            packages: 'Selenium, BeautifulSoup, PIL, pytesseract, SQLite',
            link: 'https://github.com/noamgreenstein/NBAJobScraper'
        },
        {
            name: 'Defensive Formation Case Study',
            description: 'Performed a case study on the Phoenix Suns and built machine learning prediction models to provide the optimal defensive formation based on their lineup',
            packages: 'Sklearn, Pandas, Jupyter',
            link: 'https://github.com/noamgreenstein/dsfinalproject'
        },
        {
            name: 'All NBA Predictions',
            description: 'Employed a suite of machine learning models to predict 2023-2024 All-NBA Teams',
            packages: 'Sklearn, Pandas, XGBoost, Jupyter',
            link: 'https://github.com/noamgreenstein/all-nba-predictions'
        },
    ];

    const skillsData: SkillCategory[] = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Languages",
            skills: [
                { name: "Java"},
                { name: "Python"},
                { name: "SQL"},
                { name: "JavaScript" },
                { name: "R"},
                { name: "C#"}
            ]
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Packages",
            skills: [
                { name: "Pandas" },
                { name: "Numpy" },
                { name: "Scikit" },
                { name: "PyTorch" },
                { name: "Matplotlib" },
                { name: "Seaborn" },
                { name: "Dash" },
                { name: "Streamlit" },
                { name: "Plotly" },
                { name: "Selenium" },
                { name: "Requests" },
                { name: "RShiny" }
            ]
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: "Developer Tools",
            skills: [
                { name: "Jupyter" },
                { name: "MongoDB" },
                { name: "AWS (S3 & Lambda)" },
                { name: "Git" },
                { name: "React" },
                { name: "Django" },
                { name: "Flask" },
                { name: "MSSQL" },
                { name: "Docker" },
                { name: "ASP.Net" }
            ]
        }
    ];

    const statsData = [
        { label: "SCHOOL", value: "Northeastern" },
        { label: "GRADUATION", value: "May 1, 2025" },
        { label: "CURRENT TEAM", value: "Free Agent" },
        { label: "PREVIOUS TEAM", value: "Indiana Pacers" },
        { label: "MAJOR", value: "Computer Science" },
        { label: "CONCENTRATION", value: "AI" },
        { label: "MINOR", value: "Math" },
        { label: "GPA", value: "3.7" }
    ];

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Noam_Greenstein_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'bio':
                return (
                    <div className="max-w-8xl  py-16 px-4">
                        <p className="font-sans text-white text-md leading-relaxed">
                            I am currently a fourth-year student at Northeastern University in Boston,
                            majoring in Computer Science and minoring in Mathematics. I am determined
                            to work full-time in Professional Basketball and use my skills to provide a team with a
                            competitive advantage. I am passionate about both software engineering
                            and data science and am constantly looking to deepen my knowledge in both.
                            I currently have experience working in three Major Leagues
                            (NFL, MLB, NBA) as well as in NCAA D1 Basketball. I've worked
                            on projects covering a variety of topics, such as full-stack development,
                            data engineering, data pipeline building and scaling, database management,
                            working with cloud infrastructure, web scraping & crawling, natural language processing,
                            and development of statistical & machine learning models. <u>I am actively
                            searching for full time opportunities.</u>
                        </p>
                    </div>
                );
            case 'experience':
                return (
                    <div className="max-w-4xl mx-auto py-8 px-4">
                        {/* Jump to section */}
                        <div className="mb-8 p-4 bg-gray-900 rounded-lg">

                            <div className="flex flex-wrap gap-2">
                                {experiences.map((exp, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToCompany(index)}
                                        className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full
                                                 hover:bg-red-400 hover:text-black transition-colors"
                                    >
                                        {exp.company}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Experience sections */}
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    ref={el => experienceRefs.current[index] = el!}
                                    className="border-b border-gray-800 pb-6 last:border-b-0 scroll-mt-32"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">
                                                {exp.company} | <span className="text-red-400">{exp.role}</span>
                                            </h3>
                                            <p className="text-gray-400 text-left">{exp.location}</p>
                                        </div>
                                        <span className="text-gray-400">{exp.date}</span>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-white text-left">
                                        {exp.bullets.map((bullet, idx) => (
                                            <li key={idx} className="ml-4">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div className="max-w-4xl mx-auto py-8 px-4">
                        {/* Jump to section */}
                        <div className="mb-8 p-4 bg-gray-900 rounded-lg">
                            <div className="flex flex-wrap gap-2">
                                {projects.map((prj, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToCompany(index)}
                                        className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full
                                                 hover:bg-red-400 hover:text-black transition-colors"
                                    >
                                        {prj.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Experience sections */}
                        <div className="space-y-8">
                            {projects.map((prj, index) => (
                                <div
                                    key={index}
                                    ref={el => experienceRefs.current[index] = el!}
                                    className="border-b border-gray-800 pb-6 last:border-b-0 scroll-mt-32"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-gray-400 text-left">{prj.packages}</p>
                                            <h3 className="text-xl font-bold text-white text-left">
                                                {prj.name}<span>&nbsp;&nbsp;</span>
                                                <a href={prj.link} target={'_blank'}
                                                   className="text-xs text-red-400 dark:text-red-400 hover:underline">Link</a>

                                            </h3>
                                            <p className="text-white text-md text-left">{prj.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'skills':
                return (
                    <div className="max-w-4xl mx-auto py-8 px-4">
                        <div className="space-y-12">
                            {skillsData.map((category, idx) => (
                                <div key={idx} className="bg-gray-500 rounded-lg p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        {category.icon}
                                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                    </div>


                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full
                                                             hover:bg-red-400 hover:text-white transition-colors
                                                             cursor-pointer"
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>

                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'misc':
                return (
                    <MiscContent></MiscContent>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            {/* Header Section */}
            <ProfileHeader playerInfo={playerInfo} noam={noam} handleResumeDownload={handleResumeDownload}/>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 border-b border-white border-t bg-black">
                {statsData.slice(0, 4).map((stat, index) => (
                    <StatBox
                        key={index}
                        label={stat.label}
                        value={stat.value}
                    />
                ))}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-4 border-b border-white bg-black">
                {statsData.slice(4, 8).map((stat, index) => (
                    <StatBox
                        key={index + 4}
                        label={stat.label}
                        value={stat.value}
                    />
                ))}
            </div>

            {/* Navigation Bar with Tabs and Links */}
            <div className="border-b border-white bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex justify-between items-center text-white">
                        {/* Left side - Tabs */}
                        <div className="flex flex-wrap">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-4 lg:px-8 py-4 font-semibold ${
                                        activeTab === tab.toLowerCase()
                                            ? 'border-b-2 border-red-400'
                                            : 'text-gray-400 hover:text-red-400'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Right side - Links */}
                        <div className="flex items-center">
                            <a
                                href="https://www.linkedin.com/in/noam-greenstein-a48a551a2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-4 text-gray-400 hover:text-red-400"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/noamgreenstein"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-4 text-gray-400 hover:text-red-400"
                            >
                                Github
                            </a>
                            <button
                                onClick={handleContact}
                                className="px-4 py-4 text-gray-400 hover:text-red-400"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <div className="flex justify-between items-center text-white">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-4 text-gray-400 hover:text-red-400"
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="py-2">
                                {/* Mobile Tabs */}
                                <div className="flex flex-col">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => {
                                                setActiveTab(tab.toLowerCase());
                                                setIsMenuOpen(false);
                                            }}
                                            className={`px-4 py-2 text-left font-semibold ${
                                                activeTab === tab.toLowerCase()
                                                    ? 'text-red-400'
                                                    : 'text-gray-400 hover:text-red-400'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Mobile Links */}
                                <div className="flex flex-col border-t border-gray-800 mt-2 pt-2">
                                    <a
                                        href="https://www.linkedin.com/in/noam-greenstein-a48a551a2/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-gray-400 hover:text-red-400 text-left"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/noamgreenstein"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-gray-400 hover:text-red-400 text-left"
                                    >
                                        Github
                                    </a>
                                    <button
                                        onClick={handleContact}
                                        className="px-4 py-2 text-left text-gray-400 hover:text-red-400 text-left"
                                    >
                                        Contact
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative bg-gray-900">
                {renderContent()}
            </div>
        </div>
    );
};

const StatBox: React.FC<StatBoxProps> = ({label, value}) => (
    <div
        className="flex-1 min-w-[80px] p-2 sm:p-3 md:p-4 flex flex-col justify-center items-center border-r border-white last:border-r-0 sm:min-w-[100px] md:min-w-[120px]">
        <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1">{value}</div>
        <div className="text-[10px] sm:text-sm text-gray-400 text-center">{label}</div>
    </div>
);
export default PlayerProfile;