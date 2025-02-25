const Experience = () => {
  const experiences = [
    {
      company: 'Garmin',
      position: 'Software Engineer',
      period: 'January 2022 - Present',
      description: [
        'Working on the Garmin Pay platform team to develop and maintain secure payment solutions.',
        'Implementing new features and enhancing existing functionality for the Garmin Pay ecosystem.',
        'Collaborating with cross-functional teams to ensure seamless integration of payment services.',
        'Optimizing performance and ensuring high security standards for financial transactions.',
        'Participating in code reviews and implementing best practices for code quality.'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'RESTful APIs', 'Payment Systems']
    },
    {
      company: 'Previous Company',
      position: 'Frontend Developer',
      period: 'June 2020 - December 2021',
      description: [
        'Developed responsive web applications using modern JavaScript frameworks.',
        'Implemented UI/UX designs and ensured cross-browser compatibility.',
        'Worked closely with backend developers to integrate frontend with APIs.',
        'Participated in agile development processes and sprint planning.'
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Redux', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mx-auto mb-16">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-indigo-500/30 ml-3 md:ml-6 pl-6 md:pl-12 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] md:-left-[39px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                
                {/* Content */}
                <div className="card card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <div className="text-indigo-400 font-medium mt-1 md:mt-0">{exp.period}</div>
                  </div>
                  
                  <div className="text-lg font-semibold text-blue-400 mb-4">{exp.company}</div>
                  
                  <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700/70 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 