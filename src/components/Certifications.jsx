const Certifications = () => {
  const certifications = [
    {
      issuer: 'Deloitte',
      title: 'Data Analytics Job Simulation',
    },
    {
      issuer: 'Tata',
      title: 'GenAI Data Analytics Simulation',
    },
    {
      issuer: 'Udemy',
      title: 'Machine Learning A–Z',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 md:p-8 hover:glass-strong transition-all duration-300 flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold text-purple-300 mb-1">{cert.issuer}</p>
                <p className="text-xl font-bold text-white">{cert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

