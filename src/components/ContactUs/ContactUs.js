import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'


class ContactUs extends Component {
    constructor() {
        super()
        this.state = {
            phoneNumber: {
                code: 51,
                number: "966676680"
            },
            email: "contacto.clickdigital@gmail.com",
            address: {
                country: "Perú",
                region: "Lima",
                city: "Magdalena del Mar",
                addressLine: "Jirón Tarapaca 333",
                googleMapsURL: "https://goo.gl/maps/t8w5wtztLJSNMCAd6"
            }
        }
        this.whatsappAPIURL = `https://api.whatsapp.com/send?phone=${this.state.phoneNumber.code}${this.state.phoneNumber.number}`
        this.mailTo = `mailto:${this.state.email}`
    }
    render() {
        return (
            <section className="section" id="contact-us">
                <div className="container">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod.</p>
                    <div className="contact-info">
                        <div className="icon">
                            <FontAwesomeIcon icon={faGlobeAmericas} size="2x" color="#EB5256" />
                        </div>
                        <div className="text-wrapper">
                            <a href={this.whatsappAPIURL} target="_blank" rel="noopener noreferrer">+51 966 676 680</a>
                            <br />
                            <a href={this.mailTo} target="_blank" rel="noopener noreferrer">{this.state.email}</a>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="icon">
                            <FontAwesomeIcon icon={faGalacticRepublic} size="2x" color="#EB5256" />
                        </div>
                        <div className="text-wrapper">
                            <a href={this.state.address.googleMapsURL} target="_blank" rel="noopener noreferrer">{this.state.address.addressLine}<br />{this.state.address.city}<br />{this.state.address.region}, {this.state.address.country}</a>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="/">
                            <FontAwesomeIcon icon={faGalacticRepublic} size="lg" />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGalacticRepublic} size="lg" />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGalacticRepublic} size="lg" />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGalacticRepublic} size="lg" />
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="container">
                        <h1>Say Hello</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <form action="https://formspree.io/contacto.clickdigital@gmail.com" method="POST" className="row">
                            <input type="hidden" name="_language" value="es" />
                            <input name="name" type="text" placeholder="Name" />
                            <input name="email" type="text" placeholder="E-mail" />
                            <textarea name="description" placeholder="Message" rows="4" wrap="soft" />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;