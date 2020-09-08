import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {
        let { sanPham, thuKinh } = this.props
        return (

            <div className="sanPham-border">
                <img style={{ width: '60%', cursor: 'pointer' }} src={sanPham.url} alt="" onClick={() => {
                    thuKinh(sanPham)
                }} />
            </div>

        )
    }
}
