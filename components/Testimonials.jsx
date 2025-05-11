'use client';

export default function Testimonials({ darkMode }) {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from our unused enterprise licenses after a company restructuring. The process was smooth and their valuation was higher than we expected.",
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'TechGrowth Inc.',
    },
    {
      quote:
        "As a small business, cash flow is critical. SoftSell turned our dormant software assets into immediate capital that helped us invest in new growth opportunities. Highly recommended!",
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'Nimble Solutions',
    },
  ];

  return (
    <div id="testimonials" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} py-16 sm:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-base font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-wide`}>
            Testimonials
          </h2>
          <p className={`mt-1 text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl sm:tracking-tight`}>
            What Our Clients Say
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${darkMode ? 'dark-card' : 'bg-gray-50'} rounded-lg p-8 shadow-lg`}>
                <div className="flex items-center mb-6">
                  <div className={`h-12 w-12 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                    <i className="fas fa-user text-gray-400"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <i className="fas fa-quote-left text-sm mr-2 opacity-50"></i>
                  {testimonial.quote}
                  <i className="fas fa-quote-right text-sm ml-2 opacity-50"></i>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
