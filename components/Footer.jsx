'use client';

export default function Footer({ darkMode }) {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <span className="text-xl font-bold">
              <i className="fas fa-tags mr-2"></i>
              SoftSell
            </span>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-sm">
              &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end mt-4 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
