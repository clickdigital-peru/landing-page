import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <img src="https://spinmodern.com/wp-content/uploads/2015/09/google-logo-white.png" alt="Netflix logo"/>
                    <div className="row">
                        <div className="column">
                            <a href="/">ABOUT US</a>
                        </div>
                        <div className="column">
                            <a href="/">SERVICES</a>
                        </div>
                        <div className="column">
                            <a href="/">TESTIMONIALS</a>
                        </div>
                        <div className="column">
                            <a href="/">TEAMS</a>
                        </div>
                        <div className="column">
                            <a href="/">OUR WORKS</a>
                        </div>
                        <div className="column">
                            <a href="/">CONTACT US</a>
                        </div>
                    </div>
                    <div className="subscribe-button">
                        <input type="email" placeholder="Your email"/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footer-separator"></div>
                <div className="footer-bar">
                    @ 2019. All rights reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;