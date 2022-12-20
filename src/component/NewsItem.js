import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    justifyContent: 'flex-end',
                    right: 0
                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://i2.wp.com/9to5google.com/wp-content/uploads/sites/4/2018/11/pixel_charger_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-info">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
