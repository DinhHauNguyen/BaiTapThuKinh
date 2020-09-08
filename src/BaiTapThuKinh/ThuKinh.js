import React, { Component } from 'react'

export default class ThuKinh extends Component {
    render() {
        let { url, name, desc } = this.props.thuKinh
        return (
            <div className="model">
                <img style={{ width: '270px' }} src="./img/model.jpg" alt="" />
                <div className="thuKinh">
                    <img style={{ width: '55%' }} src={url} alt="" />
                </div>
                <div className="model__info">
                    <h3 className="text-left">{name}</h3>
                    <p className="text-left">{desc}</p>
                </div>
            </div>
        )
    }
}
