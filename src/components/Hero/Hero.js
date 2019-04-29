import React, { Component } from 'react'
import Draggable from 'react-draggable';
import code from '../../assets/images/code.png'
import landing from '../../assets/images/landing-page.png'


class Hero extends Component {
    constructor() {
        super();
        this.state = {
            xP: 80
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    handleDrag = (e, data) => {
        let percentage = (e.screenX + 17) / window.innerWidth * 100;
        if (e.changedTouches != null) {
            percentage = (e.changedTouches[0].clientX + 17) / window.innerWidth * 100;
        }
        if (percentage < 90) {
            this.setState({ xP: percentage })
            console.log(this.state)
        }
    }
    render() {
        return (
            <section className="section" id="hero">
                <div className="slider">
                    <div className="left" style={{
                        width: `${this.state.xP}%`
                    }}>
                        <div className="left-slide-wrapper">
                            <div className="container">
                                <div className="title">
                                    <h1>Perfect Development</h1>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium</p>
                                <div className="laptop">
                                    <img src={code} alt="software code" />
                                </div>
                                <button type="submit">
                                    Order Development
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="container">
                            <div className="title">
                                <h1>Amazing Design</h1>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            <div className="laptop">
                                <img src={landing} alt="landing page" />
                            </div>
                            <button type="submit">
                                Order Design
                            </button>
                        </div>
                    </div>
                    <div className="control-wrapper" style={{
                        marginLeft: `calc(${this.state.xP}% - 17px)`
                    }}>
                        <Draggable
                            axis="x"
                            onDrag={this.handleDrag}
                            bounds="#hero"
                        >
                            <div className="control">
                                <h6>↔</h6>
                            </div>
                        </Draggable>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;