import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


function Home() {
    return (
        <>
            <Hero>
                <Banner title="There's Only One Boss...... " subtitle="Deluxe rooms starting from $299">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms 
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home
