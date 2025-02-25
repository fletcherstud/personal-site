const About = () => {
  const skills = [
    { name: 'Spring Boot', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Java', level: 90 },
    { name: 'Kotlin', level: 75 },
    { name: 'AWS', level: 80 },
    { name: 'System Design', level: 95 },
    { name: 'SQL', level: 75 },
    { name: 'Git', level: 85 },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mx-auto mb-16">About Me</h2>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left column - About me */}
          <div className="md:w-1/2">
            <div className="card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">My Background</h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                I&apos;m a passionate software engineer with a focus on creating elegant, efficient,
                and user-friendly applications. Currently working at Garmin on the Garmin Pay
                platform team.
              </p>

              <p className="text-slate-300 mb-6 leading-relaxed">
                My approach to software development combines technical expertise with creative
                problem-solving. I believe in writing clean, maintainable code that not only works
                well but is also easy for other developers to understand and build upon.
              </p>

              <p className="text-slate-300 mb-8 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies or working on
                my personal projects that aim to solve real-world problems. I also am a helicopter
                pilot and love to fly!
              </p>

              <div className="flex gap-4">
                <a href="#contact" className="btn btn-primary">
                  Get In Touch
                </a>
                <a href="#" className="btn btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="md:w-1/2">
            <div className="card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>

              <div className="space-y-6">
                {skills.map(skill => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-10 mb-4 text-white">Technologies I Work With</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  'React',
                  'Spring Boot',
                  'JavaScript',
                  'Java',
                  'Kotlin',
                  'AWS',
                  'Git',
                  'REST API',
                  'PostgreSQL',
                ].map(tech => (
                  <div
                    key={tech}
                    className="bg-slate-700/50 rounded-lg p-3 text-center text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
