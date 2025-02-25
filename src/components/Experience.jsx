const Experience = () => {
  const experiences = [
    {
      company: 'Knowhere',
      position: 'Co-Founder',
      period: 'March 2023 - Present',
      overview:
        'Founded, designed, developed, and distributed Knowhere: A social platform that allows businesses to promote their day to day experiences directly to customers. In turn, users can easily discover, plan, and attend local events with friends.',
      description: [
        'Developed a Spring microservice architecture hosted on AWS',
        'Created 2 react-native mobile app clients for both businesses and users (Available on App Store)',
        '83,000 lines of code in Spring and React Native',
        'Integrated with monitoring tools such as DataDog, Snyk, Sentry, and PagerDuty',
      ],
      technologies: [
        'Spring Boot',
        'ECS',
        'Docker',
        'Java',
        'React Native',
        'DataDog',
        'Sentry',
        'Snyk',
        'PagerDuty',
      ],
    },
    {
      company: 'Garmin',
      position: 'Software Engineer 2',
      period: 'January 2022 - Present',
      overview:
        'Working on the Garmin Pay platform team to provide scalable and efficient micro services in order to bring the best experience to our customers.',
      description: [
        "Integrated push provisioning capability into Garmin Pay's existing API to allow customers to directly add credit/debit cards onto their Garmin device",
        'Worked with Visa, Discover, Mastercard software development and testing team members to design and develop robust solutions to meet requirements for functionality and scalability',
        'Helped implement new front-end reactive microservice that 2x original performance with Webflux',
        'Took initiative in creating new Spring Boot microservice that required Axon, RabbitMQ, Spring Security, and other technologies',
        'Reduced Warning logs by 5% as personal project',
      ],
      technologies: [
        'Spring Boot',
        'Kotlin',
        'Java',
        'Axon',
        'RabbitMQ',
        'RESTful APIs',
        'Webflux',
        'AWS',
        'Redis',
      ],
    },
    {
      company: 'NASA Jet Propulsion Laboratory',
      position: 'System Engineer Intern',
      period: 'May 2018 - August 2018',
      overview:
        'Worked on the proposed Mars Sample Return mission to collect and return Martian dust back to Earth.',
      description: [
        "Created model to show possibility of Martian dust particle reaching Earth's Biosphere",
        'Developed MATLAB software to quicken dust propagation simulations by 60%',
        "Presented project's model to Mars Exploration Directorate",
      ],
      technologies: ['MATLAB'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mx-auto mb-16">Work Experience</h2>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-3xl">
                  {/* Content */}
                  <div className="card card-hover p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <div className="text-indigo-400 font-medium mt-1 md:mt-0">{exp.period}</div>
                    </div>

                    <div className="text-lg font-semibold text-blue-400 mb-3 text-center">
                      {exp.company}
                    </div>

                    <p className="text-slate-300 mb-6 text-center italic">{exp.overview}</p>

                    <ul className="list-disc space-y-2 text-slate-300 mb-6 pl-5 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed text-left">
                          {item}
                        </li>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
