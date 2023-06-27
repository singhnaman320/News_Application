import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img  id='spinner' src={loading} alt="loading here" />
      </div>
    )
  }
}

export default Spinner
