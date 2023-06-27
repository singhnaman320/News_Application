import React, { Component } from 'react'
import NewsItem from './NewsItem'

// Use "rce --> enter" to get simple class structure
export class News extends Component {

  articles = [
            
                {
                    "source": {
                        "id": "talksport",
                        "name": "TalkSport"
                    },
                    "author": "Joe Moore",
                    "title": "Jimmy Anderson outclasses Conor McGregor as England cricket star delivers ceremonial first pitch at MLB...",
                    "description": "Jimmy Anderson certainly did a lot better than Conor McGregor as the English cricket star delivered a perfect first pitch to open the 2023 London Series. The UFC icon may have once switched the oct…",
                    "url": "https://talksport.com/sport/us-sports/1477331/jimmy-anderson-conor-mcgregor-first-pitch-london-series-baseball/",
                    "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/OQ-TALKSPORT-ANDERSON-MCGREGOR-BBALL.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
                    "publishedAt": "2023-06-24T18:09:10Z",
                    "content": "Jimmy Anderson certainly did a lot better than Conor McGregor as the English cricket star delivered a perfect first pitch to open the 2023 London Series.\r\nThe UFC icon may have once switched the octa… [+3196 chars]"
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": null,
                    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                    "publishedAt": "2020-04-27T11:41:47Z",
                    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": null,
                    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
                    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
                    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
                    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
                    "publishedAt": "2020-03-30T15:26:05Z",
                    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
                }
            ]

  constructor(){

    super();
    console.log("Hello I an constructor from News Component")

    this.state= { //defining the state
      articles: this.articles,
      loading: false
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
