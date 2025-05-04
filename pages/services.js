import Head from 'next/head'
import { FaUserMd, FaCalendarCheck, FaCommentMedical, FaFileMedical, FaMedkit, FaHeartbeat } from 'react-icons/fa'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | MediMatch</title>
        <meta name="description" content="Explore the comprehensive healthcare services offered by MediMatch" />
        <link rel="canonical" href="https://medimatch.example.com/services" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How MediMatch Works</h2>
          <p className="text-gray-700 mb-6">
            MediMatch provides a comprehensive platform for connecting patients with healthcare professionals. Our services are designed to make healthcare more accessible, efficient, and personalized.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Service 1 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary rounded-full text-white mb-4">
                <FaUserMd size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Doctor Search</h3>
              <p className="text-gray-700">
                Find doctors based on specialty, location, experience, gender, and ratings to match your specific healthcare needs.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary rounded-full text-white mb-4">
                <FaCalendarCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Appointment Booking</h3>
              <p className="text-gray-700">
                Schedule appointments with healthcare providers directly through our platform, with real-time availability.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary rounded-full text-white mb-4">
                <FaCommentMedical size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Telehealth Consultations</h3>
              <p className="text-gray-700">
                Connect with doctors remotely through secure video consultations for non-emergency healthcare needs.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary rounded-full text-white mb-4">
                <FaFileMedical size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Records</h3>
              <p className="text-gray-700">
                Securely store and share your medical history with healthcare providers through our HIPAA-compliant platform.
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary rounded-full text-white mb-4">
                <FaMedkit size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Prescription Management</h3>
              <p className="text-gray-700">
                Easily manage your prescriptions and receive reminders for medication refills and doctor follow-ups.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary rounded-full text-white mb-4">
                <FaHeartbeat size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Health Monitoring</h3>
              <p className="text-gray-700">
                Track your health metrics and share them with your healthcare providers for better continuity of care.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">For Healthcare Providers</h2>
          <p className="text-gray-700 mb-6">
            MediMatch offers healthcare professionals a platform to reach more patients and streamline their practice management.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Provider Benefits</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="ml-3 text-gray-700">Increased visibility to potential patients in your area</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="ml-3 text-gray-700">Simplified appointment scheduling and management</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="ml-3 text-gray-700">Secure patient communication and telehealth capabilities</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="ml-3 text-gray-700">Tools to manage your online reputation and patient reviews</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="ml-3 text-gray-700">Analytics dashboard to track patient engagement and practice growth</span>
              </li>
            </ul>
            
            <button className="mt-6 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded transition-colors">
              Join as a Provider
            </button>
          </div>
        </div>
      </div>
    </>
  )
}