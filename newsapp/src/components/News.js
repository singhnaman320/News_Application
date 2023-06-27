import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0ba208f951546f68892a6f21793f278&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults}); // totalResults: Name according to given API
  }

  handlePreviousClick = async() => {

    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0ba208f951546f68892a6f21793f278&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
  
    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles
    });

  }

  handleNextClick = async() => {

    console.log("Next");

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      
     
    }else{

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0ba208f951546f68892a6f21793f278&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
    
      this.setState({
        page: this.state.page + 1,
        articles : parsedData.articles
      });

    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>TimesNews - Top Headlines</h1>
        <Spinner/>
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
        <div className="container d-flex justify-content-between">
        {/* &larr; Previous arrow, &rarr; Newxt arrow*/}
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePreviousClick}>&larr; previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} rel ="noreferrer" type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News

// We have to take care that when we clicking on next, we are not going on blank page to do so we have to calculate 
// numbers of pages by using total Items and pageSize(items on simgle page)--> Math.ceil(Totalitems/pageZize)
// Math.ceil(5.8) = 6;