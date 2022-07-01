import React from 'react'
import Navigation from '../components/Navbar'
import './Home.css'
import HomeContent from './HomeContent'

export default function Home() {
  return (
    <div>
        <Navigation />
        <section>
          <div className='imageSection'>
            <div className='mobJoinbtn'>
              <button >Join Now</button>
            </div>
            <div className='homeText'> 
              <h4>Computer Engineering</h4>
              <p>142,765 Computer Engineers follow this</p>
            </div>
          </div>
        </section>
        <HomeContent/>


        
    </div>
  )
}
