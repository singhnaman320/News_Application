import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    // Way to define props in class based components : used Javscript destructuring
    let{title, description} = this.props; 
    return (
      <div>
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
