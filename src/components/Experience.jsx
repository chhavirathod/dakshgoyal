const Experience = () => {
  const positions = [
    {
      title: 'Events Head',
      organization: 'DJS Google Developer Groups',
      duration: 'Duration: October 2025 - Present',
      responsibilities: [
        'Leading and organizing technical events and workshops',
        'Managing community engagement and developer relations',
        'Coordinating with speakers and participants',
      ],
    },
    {
      title: 'Autonomous Co-committee',
      organization: 'DJS Racing',
      duration: 'Duration: April 2024 - Present',
      responsibilities: [
        'Contributing to autonomous vehicle development projects',
        'Collaborating on technical solutions for racing systems',
        'Participating in team-based engineering challenges',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Positions of Responsibility
        </h2>
        <div className="space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="glass rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {position.title}
                  </h3>
                  <p className="text-xl text-purple-300 mb-2">
                    {position.organization}
                  </p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                  {position.duration}
                </span>
              </div>
              <ul className="space-y-3 mt-6">
                {position.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

