import Head from 'next/head'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setSubmitStatus('success');
    
    // Reset form after submission (optional)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>Contact Us | MediMatch</title>
        <meta name="description" content="Get in touch with MediMatch for any questions or support regarding our healthcare services" />
        <link rel="canonical" href="https://medimatch.example.com/contact" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-primary h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">
                      123 Healthcare Blvd<br />
                      Suite 456<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhone className="text-primary h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri: 8am - 8pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="text-primary h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">support@medimatch.example.com</p>
                    <p className="text-gray-600">info@medimatch.example.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Your message has been sent successfully! We{`&apos;`}ll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Message Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Our Location</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            {/* This would be replaced with an actual map component */}
            <p className="text-gray-600">Map would be displayed here</p>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-3">Directions</h3>
            <p className="text-gray-700">
              We are located in downtown San Francisco, easily accessible by public transportation. The nearest BART station is Powell Street, just a 5-minute walk from our office. Street parking and paid garages are available nearby.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}