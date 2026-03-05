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
  const whatsappNumber = "18325523050"; // Replace with your actual number
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
                  +1 (832) 552-3050
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
                  danish@mytransmissionexperts.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVE CONTACT */}
        <div className="bg-white border rounded-xl p-6 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h4 className="font-semibold text-gray-800">
              {activeContact === "phone"
                ? "Chat with our support team"
                : "Send us an email"}
            </h4>
            <p className="text-gray-500 text-sm">
              {activeContact === "phone"
                ? "Instant help via WhatsApp."
                : "We'll reply with a detailed solution."}
            </p>
          </div>

          {activeContact === "phone" ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L.055 23.28c-.114.455.297.866.752.752l5.425-1.468C7.878 22.446 9.875 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.663-.515-5.2-1.414l-.375-.222-3.452.935.935-3.452-.222-.375C3.515 15.663 3 13.888 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z"/>
              </svg>
              WhatsApp
            </a>
          ) : (
            <a
              href={emailUrl}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Send Email
            </a>
          )}
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

        {/* FOOTER CTA */}
        <div className="mt-10 text-center bg-white border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Still need help?
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Our support team is ready to assist you.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L.055 23.28c-.114.455.297.866.752.752l5.425-1.468C7.878 22.446 9.875 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.663-.515-5.2-1.414l-.375-.222-3.452.935.935-3.452-.222-.375C3.515 15.663 3 13.888 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z"/>
              </svg>
              WhatsApp
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;