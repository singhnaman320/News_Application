import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Use "rcep --> enter" to get proper structure with proptypes
export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">TimesNews</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
