

const NewsItem = (props) => {
 
      let {title, description , imageUrl, newsUrl, source} = props;
    return (
        <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  style={{zIndex:"1" ,left:"92%" }}>{source}</span>
        <img className="card-img-top" src={imageUrl?imageUrl:"https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/8/5/4/8/4/aufwacher_watch_1_1_hintergrund-42efdb591d88f04b.jpeg"}  alt="rohit"   />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl}  className="btn btn-sm btn-dark" target='_blank' rel='noreferrer'>ReadMore</a>
        </div>
      </div>
        </div>

    )
  }


export default NewsItem
