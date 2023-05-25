const Hero = ({startingPartOfUrl, original_title, poster_path, release_date}) => {
    return(
        <div className="hero">
            <div className="video-container">
                <img src={startingPartOfUrl + poster_path} alt="poster" />
            </div>
            <div className="video-info">
                <h1 className="title">
                    <span>{original_title}</span>
                </h1>
                <p className="date-duration-views">
                    <span>{release_date}</span>
                    <span>14 Minus</span>
                    <span>0 Views</span>
                </p>
                <div className="publisher">
                    <p className="username">Ibrahim Ansari</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;