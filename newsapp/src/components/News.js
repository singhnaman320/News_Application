import React, { Component } from 'react'
import NewsItem from './NewsItem'

// Use "rce --> enter" to get simple class structure
export class News extends Component {

  constructor(){

    super();
    console.log("Hello I an constructor from News Component")

    this.state= { //defining the state
      articles: [],
      loading: false,
      page: 1  // default: All data on page - 1
    };
  }

  // This method will run after render and Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  async componentDidMount(){

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e0ba208f951546f68892a6f21793f278";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>TimesNews - Top Headlines</h2>
        {/* Provide all three in same row */}

        {/*{this.state.articles.map((element) => {console.log(element)})}  Will show all the elements related to above states in console*/}
        <div className="row">
           {/* Provide one news card in sinle column */}
           {/* md-3 means -> In medium devices it will take 3 columns of container (total -12 grids)*/}

           {this.state.articles.map((element) => {

              {/* We have to provide the unique key(here url) as well for each child card otherwise it will see error in console */}
              return <div className="col-md-3" key={element.url}> 
             
              {/* here slice is used to limit the characters so that our cards become uniform */}
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} 
              imageUrl={element.urlToImage}
              newsUrl={element.url}/> {/*way to pass value of title and description*/}

              </div>

           })}

        </div>
      </div>
    )
  }
}

export default News
