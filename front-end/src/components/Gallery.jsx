// import axios from 'axios';
import {useState, useEffect} from 'react';

const data = [
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    },
    {
        title: 'India',
        views: 1000,
        uploadedBy: 'Ibrahim Ansari'
    }
]

const VideoCard = ({title, views, uploadedBy}) =>{
    return(
        <div className="card">
            <iframe src="https://www.youtube.com/embed/es4x5R-rV9s" title="Amazon 4k - The World’s Largest Tropical Rainforest Part 2 | Jungle Sounds | Scenic Relaxation Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="video-info">
                <p>{title}</p>
                <p className="date-info">
                    <span>{new Date().toDateString()}</span>
                    <span>{views} views</span>
                </p>
                <p>{uploadedBy}</p>
            </div>
        </div>
    )
}

const Gallery = () =>{
    const [gallery, setGallery] = useState([]);
    const [viewAll, setViewAll] = useState(false);
    useEffect(() =>{
        // const getGalleryForLandingPage = async () =>{
        //     const response = await axios.get('http://localhost:8080/');
        //     setGallery([...response.data, ...response.data, ...response.data, ...response.data]);
        // }
        // getGalleryForLandingPage();
        setGallery(data);
    }, [])
    return(
        <div className="gallery">
            <p className="recent">
                <span>Recent</span>
                <span onClick={() => setViewAll(!viewAll)}>{viewAll ? 'View Less' : 'View All'}</span>
            </p>
            <div className="g-div">
                {
                    viewAll ?
                    gallery.map(video => <VideoCard {...video} />) :
                    gallery.slice(0, 4).map(video => <VideoCard {...video} />)
                }
            </div>
        </div>
    )
}

export default Gallery;