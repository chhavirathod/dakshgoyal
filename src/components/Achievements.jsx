const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      subtitle: 'Grand Finalist',
      description: 'Reached the grand finale of one of India\'s largest hackathons, showcasing innovative problem-solving skills.',
    },
    {
      title: 'Startup Hackathon 2.0',
      subtitle: 'Winner',
      description: 'Secured first place in the startup hackathon, demonstrating excellence in building scalable solutions.',
    },
    {
      title: 'Redact 2025',
      subtitle: 'Winner',
      description: 'Achieved victory in Redact 2025, highlighting technical expertise and competitive performance.',
    },
    {
      title: 'Adappt 4.0',
      subtitle: 'Winner',
      description: 'Won Adappt 4.0, showcasing adaptability and innovation in solving complex challenges.',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 md:p-10 hover:glass-strong transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-1">{achievement.title}</h3>
                  <p className="text-xl text-purple-300 font-semibold mb-3">{achievement.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

