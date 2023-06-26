import React, { Component } from 'react'
import NewsItem from './NewsItem'

// Use "rce --> enter" to get simple class structure
export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>TimesNews - Top Headlines</h2>
        {/* Provide all three in same row */}
        <div className="row">
           {/* Provide one news card in sinle column */}
          <div className="col-md-4"> 
            <NewsItem title="MyTitle" description="myDescription"/> {/*way to pass value of title and description*/}
          </div>
         
        </div>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
