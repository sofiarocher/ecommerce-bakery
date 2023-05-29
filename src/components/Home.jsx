import React from 'react'
import "./Home.css"
import backgroundShape from "../assets/b-image.png"
import backgroundShape2 from "../assets/b-image-2.png"
import Cards from './Cards'

function Home() {
  return (
    <div className='home__container'>
        <section className='home__description'>
            <h1 className='home__title--desc'>It's not just a cake. It's THE CAKE.</h1>
            <p className='home__para'>
                Everyone is talking about our cakes right now. Don't be left out and try one. Be one more in our <span className='text--strong'>#cakelovers</span> community. I assure you, you won't leave a crumb behind.
                Perfect for birthdays, parties, weddings, or even for Netflix & Chill.
                <br />
                <span className='text--strong'>They are waiting for you - Cake Shop.</span> 
            </p>
        </section>
        <section className='home__products'>
            <h1 className='home__title--prod'>Our Cakes</h1>
            <Cards/>
        </section>
        <div className='shape'>
            <img src={backgroundShape} alt="" />
        </div>
        <div className='shape-two'>
            <img src={backgroundShape2} alt="" />
        </div>
    </div>
  )
}

export default Home