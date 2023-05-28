import {useState} from 'react';

const VideoCard = ({_id, title, desc, videoURL, username, categories, views, visibility, createdAt}) =>{
    return(
        videoURL ?
        <div className="card">
            <video controls>
                <source src={`http://localhost:8080/api/videos/video/${videoURL.slice(8)}`} type="video/mp4" />
            </video>
            <div className="video-info">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
                <div className="cat-visi">
                    <span>{categories[0]}</span>
                    <span>{visibility}</span>
                </div>
                <p className="date-info">
                    <span>{new Date().toDateString(createdAt)}</span>
                    <span>{views} views</span>
                </p>
                <p className="username">{username}</p>
            </div>
        </div> :
        <h2>Loading...</h2>
    )
}

const Gallery = ({allVideo, searchKeyword}) =>{
    const [viewAll, setViewAll] = useState(false);
    let temp = null;
    if(searchKeyword){
        temp = allVideo.filter(video => video.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    }
    return(
        <div className="gallery">
            <p className="recent">
                <span>Recent</span>
                <span onClick={() => setViewAll(!viewAll)}>{viewAll ? 'View Less' : 'View All'}</span>
            </p>
            <div className="g-div">
                {   searchKeyword ?
                    temp.map(video => <VideoCard key={video._id} {...video} />) :
                    (
                        viewAll ?
                        allVideo.map(video => <VideoCard key={video._id} {...video} />) :
                        allVideo.slice(0, 4).map(video => <VideoCard key={video._id} {...video} />)
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;