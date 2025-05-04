import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DoctorCard from '../../components/DoctorCard'
import Filters from '../../components/Filters'

export default function DoctorsListing() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    specialty: '',
    location: '',
    experience: '',
    rating: '',
    gender: '',
  })

  useEffect(() => {
    fetchDoctors()
  }, [currentPage, filters])

  const fetchDoctors = async () => {
    try {
      setLoading(true)
      const params = {
        page: currentPage,
        limit: 9,
        ...filters
      }
      
      // Filter out empty values
      Object.keys(params).forEach(key => {
        if (params[key] === '') {
          delete params[key]
        }
      })
      
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/doctors`, { params })
      
      setDoctors(response.data.doctors)
      setTotalPages(response.data.totalPages)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching doctors:', err)
      setError('Failed to load doctors. Please try again later.')
      setLoading(false)
    }
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Head>
        <title>Find Doctors | MediMatch</title>
        <meta name="description" content="Browse our extensive list of qualified doctors and find the perfect match for your healthcare needs" />
        <meta name="keywords" content="doctors, healthcare, medical specialists, find doctor" />
        <link rel="canonical" href="https://medimatch.example.com/doctors" />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Find Doctors | MediMatch" />
        <meta property="og:description" content="Browse our extensive list of qualified doctors and find the perfect match for your healthcare needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medimatch.example.com/doctors" />
        <meta property="og:image" content="https://medimatch.example.com/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Find Doctors | MediMatch" />
        <meta name="twitter:description" content="Browse our extensive list of qualified doctors and find the perfect match for your healthcare needs" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Doctor</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className="w-full md:w-1/4">
            <Filters onFilterChange={handleFilterChange} />
          </div>
          
          {/* Doctors Listing Section */}
          <div className="w-full md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doctors.map(doctor => (
                    <DoctorCard key={doctor._id} doctor={doctor} />
                  ))}
                </div>
                
                {doctors.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No doctors found matching your criteria.</p>
                    <p className="mt-4">Try adjusting your filters to see more results.</p>
                  </div>
                )}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <nav className="inline-flex rounded-md shadow">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border border-gray-300 rounded-l-md ${
                          currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-50'
                        }`}
                      >
                        Previous
                      </button>
                      
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handlePageChange(i + 1)}
                          className={`px-4 py-2 border-t border-b border-r border-gray-300 ${
                            currentPage === i + 1 ? 'bg-primary text-white' : 'hover:bg-gray-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border border-gray-300 rounded-r-md ${
                          currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-50'
                        }`}
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}