import { Sponsor } from '../../components/regular/Home/Sponsor'
import { Hero } from '../../components/regular/Home/Hero'
import { Donation } from '../../components/regular/Home/Donation'
import { Impact } from '../../components/regular/Home/Impact'
import { Articles } from '../../components/regular/Home/Articles'
import { useState } from 'react'
import SideNavbar from '../../components/Header/SideNavbar'
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  return (
    <>
      {/* can always copy an paste these tailwind padding classes to other components for uniformity*/}
      {/* max-w-[88rem] lg:px-[7.5rem] md:px-12 px-4  */}
      {isLoggedIn ? (
        <SideNavbar />
      ) : (
        <>
          <Hero />
          <Sponsor />
          <section id="donationSection">
            <Donation />
          </section>
          <Impact />
          <Articles />
        </>
      )}
    </>
  )
}

export default Home
