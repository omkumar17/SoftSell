'use client';

export default function HowItWorks({ darkMode }) {
  const steps = [
    {
      icon: 'fa-upload',
      title: 'Upload License',
      description: 'Submit your license details and information through our secure portal.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Get Valuation',
      description: 'Receive a market-based valuation within 24 hours from our expert team.',
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Get Paid',
      description: 'Accept our offer and get paid promptly via your preferred payment method.',
    },
  ];

  return (
    <div id="how-it-works" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} py-16 sm:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-base font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-wide`}>
            Simple Process
          </h2>
          <p className={`mt-1 text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl sm:tracking-tight`}>
            How It Works
          </p>
          <p className={`max-w-xl mt-5 mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className={`${darkMode ? 'dark-card' : 'bg-gray-50'} pt-6 px-6 pb-8 rounded-lg text-center`}>
                <div className="flex justify-center">
                  <div className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'} rounded-md p-3 inline-flex items-center justify-center mb-4`}>
                    <i className={`fas ${step.icon} text-2xl`}></i>
                  </div>
                </div>
                <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{step.description}</p>
                <div className="mt-4 flex justify-center">
                  <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${darkMode ? 'bg-blue-800 text-blue-200' : 'bg-blue-500 text-white'}`}>
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
