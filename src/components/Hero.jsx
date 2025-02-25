import { useEffect, useRef } from 'react';

const Hero = () => {
  const typingRef = useRef(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const roles = ['Software Engineer', 'Frontend Developer', 'React Specialist', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-float">
            <svg className="w-16 h-16 md:w-20 md:h-20 text-indigo-500 animate-pulse-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              John Fletcher
            </span>
          </h1>
          
          <div className="flex items-center mb-8">
            <div className="h-px w-12 bg-slate-700"></div>
            <p className="text-xl md:text-2xl font-medium mx-4 text-slate-300">
              I&apos;m a <span ref={typingRef} className="text-white font-semibold"></span>
              <span className="animate-blink">|</span>
            </p>
            <div className="h-px w-12 bg-slate-700"></div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12">
            Currently working at <span className="font-semibold text-white">Garmin</span> on the Garmin Pay platform team.
            Building elegant solutions to complex problems with a focus on user experience and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
            >
              Contact Me
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="Scroll down">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 