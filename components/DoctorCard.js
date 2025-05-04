import Image from 'next/image'
import { FaStar, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa'

export default function DoctorCard({ doctor }) {
  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < rating ? 'text-yellow-400' : 'text-gray-300'} 
        />
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={doctor.profilePicture || 'https://via.placeholder.com/300x200?text=Doctor+Image'}
          alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">Dr. {doctor.firstName} {doctor.lastName}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <FaStethoscope className="mr-2" />
          <span>{doctor.specialty}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-2" />
          <span>{doctor.location}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {renderStars(doctor.rating)}
          </div>
          <span className="text-gray-600">({doctor.reviewCount || 0} reviews)</span>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          <span>{doctor.experience} years experience</span>
          <span className="mx-2">•</span>
          <span>{doctor.gender}</span>
        </div>
        
        <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors">
          View Profile
        </button>
      </div>
    </div>
  )
}