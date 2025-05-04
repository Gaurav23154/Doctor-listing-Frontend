import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | MediMatch</title>
        <meta
          name="description"
          content="Learn about MediMatch's mission to connect patients with the best healthcare professionals"
        />
        <link rel="canonical" href="https://medimatch.example.com/about" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About MediMatch</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At MediMatch, we believe everyone deserves access to quality
            healthcare. Our platform connects patients with the right healthcare
            professionals, making it simple to find doctors who match your
            specific needs and preferences.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2023, MediMatch started with a simple observation:
            finding the right doctor is often complicated and time-consuming.
            Our founders experienced this frustration firsthand and set out to
            create a solution that makes healthcare more accessible and
            personalized.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-700 mt-2">
                Former Chief of Medicine with 15+ years of healthcare experience
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">Michael Chen</h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-gray-700 mt-2">
                Healthcare IT specialist with experience at leading health tech
                companies
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">Amara Patel</h3>
              <p className="text-gray-600">Head of Operations</p>
              <p className="text-gray-700 mt-2">
                Former hospital administrator with expertise in healthcare
                logistics
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-lg mb-2">Patient-Centered Care</h3>
              <p className="text-gray-700">
                We believe healthcare should revolve around patients{`&apos;`} needs and
                preferences.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-lg mb-2">Accessibility</h3>
              <p className="text-gray-700">
                Healthcare should be accessible to everyone, regardless of
                location or circumstance.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-lg mb-2">Quality</h3>
              <p className="text-gray-700">
                We uphold the highest standards for the healthcare professionals
                on our platform.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously improve our platform to better serve patients
                and doctors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
