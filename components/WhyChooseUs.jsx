'use client';

export default function WhyChooseUs({ darkMode }) {
  const benefits = [
    {
      icon: 'fa-shield-alt',
      title: 'Secure Transactions',
      description: 'End-to-end encryption and secure transfer protocols protect your license data and financial information.',
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Best Market Value',
      description: 'Our extensive network of buyers ensures you get the maximum value for your licenses.',
    },
    {
      icon: 'fa-bolt',
      title: 'Fast Processing',
      description: 'Complete the entire process from valuation to payment in as little as 48 hours.',
    },
    {
      icon: 'fa-check-circle',
      title: 'Compliance Guaranteed',
      description: 'Our legal team ensures all transactions comply with software licensing regulations.',
    },
  ];

  return (
    <div id="why-choose-us" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-16 sm:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-base font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-wide`}>
            Our Advantages
          </h2>
          <p className={`mt-1 text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl sm:tracking-tight`}>
            Why Choose SoftSell
          </p>
          <p className={`max-w-xl mt-5 mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            We offer unmatched benefits when it comes to selling your software licenses.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className={`${darkMode ? 'dark-card' : 'bg-white'} pt-6 px-6 pb-8 rounded-lg shadow-lg text-center`}>
                <div className="flex justify-center">
                  <div className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'} rounded-md p-3 inline-flex items-center justify-center mb-4`}>
                    <i className={`fas ${benefit.icon} text-2xl`}></i>
                  </div>
                </div>
                <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{benefit.title}</h3>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
