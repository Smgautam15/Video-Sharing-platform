import Navbar from '../components/Navbar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const VideoCard = ({title, desc, videoURL, username, categories, views, visibility, createdAt}) =>{
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

const ValidUserLandingPage = () =>{
    const [userVideos, setUserVideos] = useState([]);
    const username = localStorage.getItem('username');
    const encodedUsername = encodeURIComponent(username);
    useEffect(() =>{
        const fetchUserVideos = async () =>{
            try{
                const response = await axios.get(`http://localhost:8080/api/videos/user/${encodedUsername}`);
                console.log(response);
                setUserVideos(response.data);
            }catch(error){
                console.error(error);
            }
        }
        fetchUserVideos();
    }, [encodedUsername]);
    return(
        <>
            <Navbar indicator='userpage' />
            <div className="gallery">
                <h1 style={{marginBottom: '2rem'}}>My Videos</h1>
                <div className="g-div">
                    {
                        userVideos.map(video => <VideoCard key={video._id} {...video} />)
                    }
                </div>
            </div>
        </>
    )
}

export default ValidUserLandingPage;