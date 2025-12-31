const Projects = () => {
  const projects = [
    {
      title: 'SHETKARI – Crop Disease Detection System',
      description:
        'An intelligent system for detecting crop diseases using machine learning and computer vision techniques. The system helps farmers identify plant diseases early, enabling timely intervention and improved crop yield.',
      techStack: ['Python', 'Machine Learning', 'Computer Vision', 'TensorFlow', 'OpenCV'],
      githubLink: 'https://github.com/Daksh159/sih_shetkari',
    },
    {
      title: 'Crime Prediction Model',
      description:
        'Advanced crime prediction system using Graph Neural Networks (GNN) combined with LSTM, ARIMA, and Prophet models. This multi-model approach provides accurate crime forecasting for better resource allocation and public safety.',
      techStack: ['Python', 'GNN', 'LSTM', 'ARIMA', 'Prophet', 'PyTorch', 'Time Series Analysis'],
      githubLink: '#',
    },
    {
      title: 'IPL Data Analytics using Apache Spark',
      description:
        'Comprehensive data analytics project analyzing IPL (Indian Premier League) data using Apache Spark for distributed processing. The project includes performance analysis, player statistics, team comparisons, and predictive insights.',
      techStack: ['Apache Spark', 'Spark SQL', 'Python', 'Data Analytics', 'Big Data', 'Scala'],
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 hover:glass-strong transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-lg text-white hover:bg-white/30 transition-all duration-300 font-semibold text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

