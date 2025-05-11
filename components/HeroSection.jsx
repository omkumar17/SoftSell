'use client';

export default function HeroSection({ darkMode }) {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className={`text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
            <span className="block">Monetize Your Unused</span>
            <span className={`block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Software Licenses</span>
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
            Turn surplus software licenses into immediate capital. Our platform helps businesses sell their unused licenses quickly and securely for the best market value.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <a href="#contact" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} md:py-4 md:text-lg md:px-10`}>
                Sell My Licenses
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#how-it-works" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-100' : 'bg-white hover:bg-gray-50 text-gray-700'} md:py-4 md:text-lg md:px-10`}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
