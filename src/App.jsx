import React, { useState } from 'react'

const App = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page. We'll send a reset link to your email."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal."
    },
    {
      id: 3,
      question: "How can I update my profile?",
      answer: "Go to Settings > Profile to update your information."
    },
    {
      id: 4,
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption to protect your data."
    },
    {
      id: 5,
      question: "What are your support hours?",
      answer: "Our support team is available Monday to Friday, 9am to 6pm EST."
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Support Center</h1>
        <p className="text-gray-600 mt-1">We're here to help</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Phone Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="p-3 bg-blue-50 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Phone Support</h2>
              <p className="text-gray-600 mt-1">Speak with our support team</p>
              <a href="tel:+18001234567" className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium">
                +1 (800) 123-4567
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="p-3 bg-green-50 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Email Support</h2>
              <p className="text-gray-600 mt-1">Get a response within 24 hours</p>
              <a href="mailto:support@company.com" className="inline-block mt-3 text-green-600 hover:text-green-700 font-medium">
                support@company.com
              </a>
              <p className="text-sm text-gray-500 mt-2">We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.id} className="hover:bg-gray-50">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openFaq === faq.id && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-sm text-gray-500 text-center">
        Need immediate assistance? Call our support line.
      </div>
    </div>
  )
}

export default App