'use client';

import { useState } from 'react';

export default function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div id="contact" className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} py-16 sm:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-base font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-wide`}>
            Get Started
          </h2>
          <p className={`mt-1 text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl sm:tracking-tight`}>
            Contact Us
          </p>
          <p className={`max-w-xl mt-5 mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            Ready to convert your unused licenses into cash? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {submitted ? (
            <div className={`rounded-md ${darkMode ? 'bg-green-900' : 'bg-green-50'} p-4`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className={`fas fa-check-circle ${darkMode ? 'text-green-400' : 'text-green-400'}`}></i>
                </div>
                <div className="ml-3">
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                    Thank you for your submission!
                  </h3>
                  <div className={`mt-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                    <p>We've received your information and will contact you shortly.</p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md ${darkMode ? 'bg-green-800 text-green-100 hover:bg-green-700' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 ${darkMode ? 'text-white' : ''}`}>
              <div className="sm:col-span-2">
                <label htmlFor="name" className={`block text-black text-sm font-medium ${darkMode ? 'text-white':'text-black'}`}>Name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm border focus:ring-blue-500 focus:border-blue-500  rounded-md ${darkMode ? 'text-white border-white':'text-black border-black'} ${errors.name ? 'border-red-300' : ''}`}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className={`block text-black text-sm font-medium ${darkMode ? 'text-white':'text-black'}`}>Email</label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm border focus:ring-blue-500 focus:border-blue-500  rounded-md ${darkMode ? 'text-white border-white':'text-black border-black'} ${errors.email ? 'border-red-300' : ''}`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className={`block text-black text-sm font-medium ${darkMode ? 'text-white':'text-black'}`}>Company</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm border focus:ring-blue-500 focus:border-blue-500  rounded-md ${darkMode ? 'text-white border-white':'text-black border-black'} ${errors.company ? 'border-red-300' : ''}`}
                  />
                  {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="licenseType" className={`block text-black text-sm font-medium ${darkMode ? 'text-white':'text-black'}`}>License Type</label>
                <div className="mt-1">
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm border focus:ring-blue-500 focus:border-blue-500  rounded-md ${darkMode ? 'text-white border-white':'text-black border-black'} ${errors.licenseType ? 'border-red-300' : ''}`}
                  >
                    <option className={`text-black `} value="">Select a license type</option>
                    <option className={`text-black `} value="enterprise">Enterprise Software</option>
                    <option className={`text-black `} value="cloud">Cloud Services</option>
                    <option className={`text-black `} value="saas">SaaS Subscriptions</option>
                    <option className={`text-black `} value="desktop">Desktop Applications</option>
                    <option className={`text-black `} value="other">Other</option>
                  </select>
                  {errors.licenseType && <p className="mt-2 text-sm text-red-600">{errors.licenseType}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={`block text-black text-sm font-medium ${darkMode ? 'text-white':'text-black'}`}>Message</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={` py-3 px-4 block w-full shadow-sm border focus:ring-blue-500 focus:border-blue-500  rounded-md ${darkMode ? 'text-white border-white':'text-black border-black'}`}
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
