import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MediMatch - Find Your Perfect Doctor</title>
        <meta name="description" content="Find the best doctors in your area specialized in your needs" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medimatch.example.com" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-6">Find Your Perfect Doctor</h1>
          <p className="text-xl mb-8">Access to the best healthcare professionals in your area</p>
          <Link href="/doctors">
            <span className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Find Doctors Now
            </span>
          </Link>
        </section>
      </main>
    </>
  )
}