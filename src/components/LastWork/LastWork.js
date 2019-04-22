import React, { Component } from 'react'
import Project from './components/Project'

class LastWork extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name: "Lorem ipsum Dolor",
                    description: "Wordpress Features",
                    thumbnail: require('../../assets/images/project1.png')
                },
                {
                    name: "Lorem ipsum Dolor",
                    description: "Wordpress Features",
                    thumbnail: require('../../assets/images/project1.png')
                },
                {
                    name: "Lorem ipsum Dolor",
                    description: "Wordpress Features",
                    thumbnail: require('../../assets/images/project1.png')
                },
                {
                    name: "Lorem ipsum Dolor",
                    description: "Wordpress Features",
                    thumbnail: require('../../assets/images/project1.png')
                },
                {
                    name: "Lorem ipsum Dolor",
                    description: "Wordpress Features",
                    thumbnail: require('../../assets/images/project1.png')
                },
                {
                    name: "Lorem ipsum Dolor",
                    description: "Wordpress Features",
                    thumbnail: require('../../assets/images/project1.png')
                }
            ]
        }
    }
    render() {
        return (
            <section className="section" id="last-work">
                <div className="container">
                    <h1>Last work</h1>
                    <p>We create beautifully-crafted websites that stand out from the crowd ~ and perfect function comes as stantard</p>
                    <div className="row">
                        {this.state.projects.map((project, key) => (
                            <Project name={project.name} description={project.description} thumbnail={project.thumbnail} key={key} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default LastWork;