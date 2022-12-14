import React from 'react'
import Slide from './Carousel'
import Cards from './Cards'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Previous from './Previous'

const Home = () => {
  return (
    <div className='home-main'>
      <div>
        <div className='carousel-container'>
          <Slide />
        </div>
      </div>
      <div>
        <div>
          <Cards />
        </div>
      </div>
      <div className='section-off'></div>
      <section id='about-us'>
        <div className='container'>
          <div className='row align-items-center'>
            <div></div>
            <div className='col-md-4 col-lg-6 company-logo'>
              <img
                style={{ width: '100%' }}
                src='../../Logo.jpg'
                alt='company-logo'
                className='company-logo'
              />
            </div>
            <div
              className='col text-col'
              style={{ fontSize: '20px', letterSpacing: '.1rem' }}
            >
              <h2 className='welcome-msg'>Welcome to FFS Logistics</h2>
              <br />

              <div>
                <div className='about-text-2-line'></div>
                <p className='about-text-2'>
                  We offer logistics and transportation services to companies
                  with varied needs, anything from dedicated services to last
                  minute shipments. Our customer base encompasses industries
                  such as food, beverage, produce, manufacturing, retail,
                  recycling, and much more.
                </p>
                <div className='about-us-btn-container'>
                  <button className='about-us-btn'>
                    <Link to='/quote' className='nav-item nav-link'>
                      Quote
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Previous />
      <Footer />
    </div>
  )
}

export default Home
