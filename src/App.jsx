import React, { useState } from "react";

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeContact, setActiveContact] = useState("phone");
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

    const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page. We'll send a reset link to your email within minutes.",
    },
    {
      id: 2,
      question: "How to change first time password?",
      answer:
        "When you log in for the first time, you'll be prompted to change your password. Just follow the on-screen instructions to set a new password.",
    },
    {
      id: 3,
      question: "How can I update my profile?",
      answer:
        " Your Profile is update by your upper management. Please contact your manager to update your profile information.",
    },
    {
      id: 4,
      question: "Is my data secure?",
      answer:
        "Yes. We use 256-bit encryption and follow industry security standards.",
    },
    {
      id: 5,
      question: "What are your support hours?",
      answer:
        "Our support team is available 24/7 to assist you with any issues or questions you may have.",
    },
    {
      id: 6,
      question: "How do I change my profile picture?",
      answer:
        "It will be change by your upper management. Please contact your manager to update your profile picture.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSearchClick = (faq) => {
    setSearch(faq.question);
    setShowDropdown(false);
    toggleFaq(faq.id);
  };

  // Fixed WhatsApp URL - use country code without '+' and proper format
  const whatsappNumber = "18327793564"; // Replace with your actual number
  const whatsappMessage = "Hello, I need help with your service.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Email URL
  const emailUrl = "danish@mytransmissionexperts.com?subject=Support Request&body=Hello, I need help with your service.";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-red-500 text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">How can we help?</h1>
          <p className="text-white/90">
            Search FAQs or contact our support team
          </p>

          {/* SEARCH WITH DROPDOWN */}
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
            />
            
            {/* Search Dropdown */}
            {showDropdown && search && filteredFaqs.length > 0 && (
              <div className="absolute z-10 w-full md:w-2/3 left-0 right-0 mx-auto bg-white rounded-lg shadow-xl border border-gray-200 mt-2 max-h-96 overflow-y-auto">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                    onClick={() => handleSearchClick(faq)}
                  >
                    <p className="font-medium text-gray-800 text-left">{faq.question}</p>
                    <p className="text-sm text-gray-500 text-left mt-1 line-clamp-2">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setShowDropdown(false);
                }}
                className="absolute right-28 md:right-64 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

         
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* PHONE */}
          <div
            onClick={() => setActiveContact("phone")}
            className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${
              activeContact === "phone" ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone Support</h3>
                <p className="text-gray-500 text-sm">
                  Speak directly with our team
                </p>
                <p className="text-blue-600 text-lg font-medium mt-2">
                  +1 (832) 779-3564
                </p>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div
            onClick={() => setActiveContact("email")}
            className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${
              activeContact === "email" ? "ring-2 ring-red-500" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Support</h3>
                <p className="text-gray-500 text-sm">
                  Send us your detailed question
                </p>
                <p className="text-red-500 text-lg font-medium mt-2">
                  info@mytransmissionexperts.com
                </p>
              </div>
            </div>
          </div>
        </div>

       

        {/* FAQ SECTION */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {faqs.length} articles available
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-gray-400">
                    {openFaq === faq.id ? "−" : "+"}
                  </span>
                </button>

                {openFaq === faq.id && (
                  <div className="px-6 pb-4 text-gray-600 -mt-2">
                    <div className="pl-4 border-l-2 border-blue-500">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default App;