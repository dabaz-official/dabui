import Head from 'next/head'
import Header from '../components/globals/Header'
import Preview from '../components/landing/Preview'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import GetStarted from '../components/landing/GetStarted'
import Pricing from '../components/landing/Pricing'
import Faqs from '../components/landing/Faqs'
import Footer from '../components/globals/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DabUI</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Preview />
        <Features />
        <GetStarted />
        <Pricing />
        <Faqs />
      </main>

      <Footer />
    </div>
  )
}
