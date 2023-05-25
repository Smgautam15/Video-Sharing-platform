import {useState} from 'react';

const VideoCard = ({startingPartOfUrl, original_title, poster_path, release_date}) =>{
    return(
        <div className="card">
            <img src={startingPartOfUrl + poster_path} alt="poster" />
            <div className="video-info">
                <p>{original_title}</p>
                <p className="date-info">
                    <span>{release_date}</span>
                    <span>0 views</span>
                </p>
            </div>
        </div>
    )
}

const Gallery = ({startingPartOfUrl, allVideo}) =>{
    const [viewAll, setViewAll] = useState(false);
    return(
        <div className="gallery">
            <p className="recent">
                <span>Recent</span>
                <span onClick={() => setViewAll(!viewAll)}>{viewAll ? 'View Less' : 'View All'}</span>
            </p>
            <div className="g-div">
                {
                    viewAll ?
                    allVideo.map((video, index) => <VideoCard key={index} startingPartOfUrl={startingPartOfUrl}  {...video} />) :
                    allVideo.slice(0, 4).map((video, index) => <VideoCard key={index} startingPartOfUrl={startingPartOfUrl} {...video} />)
                }
            </div>
        </div>
    )
}

export default Gallery;