import Head from 'next/head'
import Header from '../components/Header'
import Mission from '../components/Mission'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import OurTeam from '../components/OurTeam'
import OurServices from '../components/OurServices'

export default function Home() {
  return (
    <div>
      <Head>
        <title>N4 Construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <Header/>
      {/* MISSION */}
      <Mission/>
      {/* OurServices */}
      <OurServices/>
      {/* Our Team */}
      
      <OurTeam/>
      {/* ABOUT */}
      {/* <About/> */}
      {/* CONTACT US */}
      <Contact/>
      {/* FOOTER */}
      <Footer/>
      
    </div>
  )
}
