import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Loading from './component/Loading';
import { useEffect, useState } from 'react';
import Tools from './component/Tools';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import project_list from './project_list';
import Footer from './component/Footer';

function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setIsLoading(false);
      },4000)
    };

    loadData();
  },[])

  function createProjectCard(projects){
    return(
    <Project
        key={projects.id}
        id={projects.id}
        name={projects.name}
        img= {projects.imgURL}
        desc={projects.desc}
        web= {projects.webLink}
    />
    );
  }

  return  (  
   
    
    <motion.div className="App" 
    animate={{
      opacity:[0,1]
    }}>
      <Navbar />
      <Home />
      <Tools />
      <About />
      <Skills />
      <div
       id='projects' className='flex flex-col pt-12 pb-12 md:pt-0 md:pb-0 min-h-[80vh] justify-center items-center gap-8 bg-[#f95a43] text-white mb-14 mt-14'>
      <h1 className='about-text text-4xl font-black'>Portfolio</h1>
      <p className='about-text w-[70%] text-center'>Explore my design and developing which includes user interface and experience design, UX research, and usability testing. Let's collaborate to create great digital experiences.</p>
      <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
      {project_list.map(createProjectCard)}
      </div>
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
