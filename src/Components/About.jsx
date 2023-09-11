import React from 'react';
import aboutimage from '../Assets/images(8).png';

function About() {
    return(
        <div id='about'>
            <h1>ABOUT US</h1>
            <div className='a-container'>
        <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h2>Let's eat cake and celebrate the little things</h2>
                <p>Welcome to Sweet Cake, where we believe that every moment deserves a touch of sweetness.
                   Our passion for baking and creating cakes is what drives us to craft delectable
                   delights that not only your taste buds but also bring a smile to your face.</p> 
                <p>From birthdays to weddings, anniversaries to celebrations of life's little victories,
                   our cakes are designed to make these moments even more special.We invite you to join
                   us in celebrating life's occasions, big and small, with the sweetness of our creations.</p>
                <button> Learn More </button>           
                 </div>
                 </div>
        </div>
    )
}


export default About;