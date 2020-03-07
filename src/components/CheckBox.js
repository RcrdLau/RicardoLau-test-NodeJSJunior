import React, { Component } from 'react'

export default class CheckBox extends Component{ 
    render() {
        return (
            <label className="container-cb">{this.props.msgg}
                <input type="checkbox" checked="checked"/>
                <span className="checkmark"></span>
            </label>
        )
    }
}
