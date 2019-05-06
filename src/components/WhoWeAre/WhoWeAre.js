import React, { Component } from 'react'
import image from '../../assets/images/section1.png'

class WhoWeAre extends Component {
    render() {
        return (
            <section className="section" id="who-we-are">
                <div className="container">
                    <div className="img-wrapper">
                        <img src={image} alt="Who we are IMG" />
                    </div>
                    <div className="text-wrapper">
                        <h1>Who we Are</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti sapiente molestiae minima ratione autem sit est quasi, perferendis voluptatum recusandae quia sint itaque nesciunt, cupiditate facere rem similique optio?</p>
                        <a href="#contact-us">Contact Us</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhoWeAre;