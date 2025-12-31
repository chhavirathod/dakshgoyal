const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Analytics',
      skills: ['Data Analysis', 'Statistical Analysis', 'Exploratory Data Analysis', 'Data Mining'],
    },
    {
      title: 'Tools & Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      title: 'Programming & Databases',
      skills: ['JavaScript', 'Python', 'SQL', 'Spark SQL', 'R', 'NoSQL'],
    },
    {
      title: 'Forecasting & Modeling',
      skills: ['Time Series Analysis', 'ARIMA', 'Prophet', 'LSTM', 'GNN', 'Machine Learning'],
    },
    {
      title: 'Software & Cloud',
      skills: ['Apache Spark', 'Hadoop', 'AWS', 'Git', 'Docker', 'Kubernetes'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 hover:glass-strong transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-200 border border-purple-400/30 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

