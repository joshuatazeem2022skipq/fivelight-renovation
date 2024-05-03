import React from 'react'
import AboutUsComponent from '../About Us/AboutUsComponent'
import AboutUsMain from '../About Us/AboutUsMain'
import ClientReviews from '../About Us/ClientReviews'
import ContactAbout from '../About Us/ContactAbout'
import Projects from '../About Us/Projects'

const AboutUsPage = () => {
  return (
    <div>
        <AboutUsMain/>
      <AboutUsComponent/>
      <ClientReviews/>
      <Projects/>
      <ContactAbout/>
    </div>
  )
}

export default AboutUsPage
