import { useState } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa'

export default function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    specialty: '',
    location: '',
    experience: '',
    rating: '',
    gender: '',
  })
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const specialties = [
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Ophthalmologist',
    'Orthopedic',
    'Pediatrician',
    'Psychiatrist',
    'Dentist',
    'General Physician'
  ]

  const locations = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilterChange(filters)
    if (window.innerWidth < 768) {
      setMobileFiltersOpen(false)
    }
  }

  const resetFilters = () => {
    const resetValues = {
      specialty: '',
      location: '',
      experience: '',
      rating: '',
      gender: '',
    }
    setFilters(resetValues)
    onFilterChange(resetValues)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden w-full flex items-center justify-between bg-primary text-white p-3 rounded-lg mb-4"
        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
      >
        <span className="flex items-center">
          <FaFilter className="mr-2" />
          Filters
        </span>
        <span>{mobileFiltersOpen ? '−' : '+'}</span>
      </button>
      
      {/* Filter Form */}
      <form 
        onSubmit={handleSubmit}
        className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}
      >
        <h2 className="text-xl font-bold mb-4 hidden md:block">Filters</h2>
        
        {/* Search by name (not functional as per requirements) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Search by Name</label>
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search doctor name"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        
        {/* Specialty Filter */}
        <div className="mb-4">
          <label htmlFor="specialty" className="block text-gray-700 font-medium mb-2">Specialty</label>
          <select
            id="specialty"
            name="specialty"
            value={filters.specialty}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>
        
        {/* Location Filter */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        
        {/* Experience Filter */}
        <div className="mb-4">
          <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Experience</label>
          <select
            id="experience"
            name="experience"
            value={filters.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Any Experience</option>
            <option value="0-5">0-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10-15">10-15 years</option>
            <option value="15+">15+ years</option>
          </select>
        </div>
        
        {/* Rating Filter */}
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">Rating</label>
          <select
            id="rating"
            name="rating"
            value={filters.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Any Rating</option>
            <option value="4+">4+ Stars</option>
            <option value="3+">3+ Stars</option>
            <option value="2+">2+ Stars</option>
          </select>
        </div>
        
        {/* Gender Filter */}
        <div className="mb-6">
          <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
          <select
            id="gender"
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Any Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        {/* Submit and Reset Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="flex-1 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}