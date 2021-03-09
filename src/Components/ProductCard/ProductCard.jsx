import React, { Component } from 'react'
import './ProductCard.css'

export default class ProductCard extends Component {
    render() {
        return (
        <div className='card m-5'>
            <div className='card-body'>
                <div className='card-title font-weight-bold'>ID:{this.props.id}</div>
                <div className='card-text'>Name:{this.props.name}</div>
                <div className='card-text'>Price:{this.props.price}</div>
            </div>
        </div>
        )
    }
}

