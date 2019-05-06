import React, { Component } from 'react'
import code from '../../assets/images/code.png'
import landing from '../../assets/images/landing-page.png'


class Hero extends Component {
    constructor() {
        super();
        this.state = {
            xP: 80,
            dragging: false,
            radius: 0,
            maxP: 95,
            minP: 5,
        }
    }

    componentDidMount = _ => {
        if(window.innerWidth >= 768){
            this.setState({
                xP: 50
            })
        }
    }

    onPointerUp = e => {
        this.setState({
            dragging: false,
        })
    }

    onPointerMove = e => {
        const xPos = e.type === 'pointermove' ? e.clientX : e.targetTouches[0].pageX
        const percentage = (xPos + this.state.radius) / window.innerWidth * 100
        if (this.state.dragging && percentage < this.state.maxP && percentage > this.state.minP) {
            this.setState({
                xP: percentage
            })
        }
        e.stopPropagation()
    }

    onPointerDown = e => {
        console.log(e.button)
        if (e.button !== 0) return
        this.setState({
            dragging: true,
            radius: e.target.offsetWidth / 2
        })
        e.stopPropagation()
        e.preventDefault()
    }
    render() {
        return (
            <section
                className="section"
                id="hero"
                onPointerMove={this.onPointerMove}
                onTouchMove={this.onPointerMove}
                onPointerUp={this.onPointerUp}
                onTouchEnd={this.onPointerUp}
            >
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
                        <div className="control" onPointerDown={this.onPointerDown}>
                            <h6>↔</h6>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;