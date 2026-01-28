import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="glass rounded-2xl p-4 md:p-12">
          {/* changed: layout now places image on the left and text on the right */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* left: photo — full width on small screens, 40% width on md+ */}
            <div className="w-full md:w-1/4 flex-shrink-0 profile-image-container">
              <img
                src={profileImg}
                alt="Daksh Goyal"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
            {/* right: text content */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a <span className="text-white font-semibold">B.Tech Computer Science Engineering (Data Science)</span> student
                at <span className="text-white font-semibold">DJ Sanghvi College of Engineering</span>, maintaining a
                strong academic record with a <span className="text-white font-semibold">CGPA of 9.2/10</span>.
              </p>
              {/* <p className="text-lg">
                I'm pursuing <span className="text-white font-semibold">Honours in Computational Finance</span>, which has deepened
                my expertise in financial modeling, risk analysis, and quantitative methods.
              </p> */}
              <p className="text-lg">
                My passion lies in transforming raw data into actionable insights through advanced analytics, machine learning,
                and scalable data systems. I specialize in building predictive models, performing comprehensive data analysis,
                and developing solutions that handle big data challenges.
              </p>
              <p className="text-lg">
                With hands-on experience in forecasting, statistical modeling, and distributed computing frameworks like Apache Spark,
                I'm equipped to tackle complex data problems and deliver impactful results.
              </p>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

