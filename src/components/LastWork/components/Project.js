import React, { Component } from 'react'
class Project extends Component {
    render() {
        return (
            <div className="column">
                <img src={this.props.thumbnail} alt="wordpress work" />
                <h4>{this.props.name}</h4>
                <span className="description">{this.props.description}</span>
            </div>
        );
    }
}

export default Project;