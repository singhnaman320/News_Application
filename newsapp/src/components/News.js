import React, { Component } from 'react'
import NewsItem from './NewsItem'

// Use "rce --> enter" to get simple class structure
export class News extends Component {
  render() {
    return (
      <div>
        <NewsItem/>
      </div>
    )
  }
}

export default News
