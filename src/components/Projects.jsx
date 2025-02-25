const Projects = () => {
  const projects = [
    {
      title: 'Knowhere',
      description: 'A location-based social platform that helps users discover hidden gems and connect with locals in new cities.',
      image: '/projects/knowhere.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      link: '#',
      download: '#'
    },
    {
      title: 'Spory AI',
      description: 'An AI-powered sports analytics platform that provides real-time insights and performance metrics for athletes and coaches.',
      image: '/projects/spory-ai.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      link: '#',
      download: '#'
    },
    {
      title: 'New Note',
      description: 'A minimalist note-taking application with powerful organization features and seamless cross-device synchronization.',
      image: '/projects/new-note.jpg',
      technologies: ['React', 'Electron', 'Firebase', 'Redux'],
      link: '#',
      download: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mx-auto mb-6">
          Personal Projects
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Check out some of my personal projects that showcase my skills and passion for creating innovative solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                {/* Project image or placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 rounded-md text-xs font-medium bg-slate-700/50 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium transition-all duration-300 text-sm text-center"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.download} 
                    className="flex-1 px-4 py-2 rounded-md border border-slate-600 hover:border-slate-400 text-white font-medium transition-all duration-300 text-sm text-center"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md bg-slate-800/70 hover:bg-slate-700/70 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 