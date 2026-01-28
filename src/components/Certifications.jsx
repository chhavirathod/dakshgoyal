const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="space-y-8">
          {/* Card 1 */}
          <div className="mx-auto w-full max-w-3xl h-[150px] rounded-3xl glass bg-transparent flex items-center px-10 gap-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                <svg
                  className="w-10 h-10 text-white"
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

              <div>
                <p className="text-purple-300 text-lg font-semibold">
                  Deloitte
                </p>
                <p className="text-white text-2xl font-bold mt-1">
                  Data Analytics Job Simulation
                </p>
              </div>
            </div>

          {/* Card 2 */}
          <div className="mx-auto w-full max-w-3xl h-[150px] rounded-3xl glass bg-transparent flex items-center px-10 gap-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                <svg
                  className="w-10 h-10 text-white"
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

              <div>
                <p className="text-purple-300 text-lg font-semibold">
                  Tata
                </p>
                <p className="text-white text-2xl font-bold mt-1">
                  GenAI Data Analytics Simulation
                </p>
              </div>
            </div>

          {/* Card 3 */}
          <div className="mx-auto w-full max-w-3xl h-[150px] rounded-3xl glass bg-transparent flex items-center px-10 gap-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                <svg
                  className="w-10 h-10 text-white"
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

              <div>
                <p className="text-purple-300 text-lg font-semibold">
                  Udemy
                </p>
                <p className="text-white text-2xl font-bold mt-1">
                  Machine Learning A–Z
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
