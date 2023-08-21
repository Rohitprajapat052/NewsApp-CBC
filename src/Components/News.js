
import { useEffect  ,useState} from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';


const News =(props)=> {
 
  const [ articles , setArticles] = useState([])
  const [ loading , setLoading] = useState(true)
  const [ page , setPage] = useState(1)
  
   
  const updateNews= async ()=> {

    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4865f21392424a0f837ec077c3924a69&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
     let parsedData = await data.json()
    setArticles(parsedData.articles)
     setLoading(false)

     
  }
   useEffect(()=>{
     updateNews();
     //eslint-disable-next-line
   },[]) 
   

   
    
    const  handleNext = async ()=>{
      
   
      setPage(page+1)
       updateNews();
      }
     const handlePrev = async ()=> {
    
      setPage(page-1)
      updateNews();
    }
  

    return (
      <div className="container">
       <h1 className="text-center" style={{margin: '35px 0px', marginTop:'8npm start0px'}}>NewsShot-Top Headlines</h1>
     
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title: ""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage?element.urlToImage:""}
                  newsUrl={element.url?element.url:""}
                  source={element.source.name}
                />
              </div>
            );
          })}

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={page<1} type="button" className="btn btn-dark" onClick={handlePrev}>Previous</button>
        <button type="button" className="btn btn-dark" onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  }

News.defaultProps = {
  country: 'in',
  pageSize : 8,
  category : 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: Number,
  category :PropTypes.string
}

export default News;
