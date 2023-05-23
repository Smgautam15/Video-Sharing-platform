const Hero = () => {
    return(
        <div className="hero">
            <div className="video-container">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/avz06PDqDbM" title="Mission: Impossible – Dead Reckoning Part One | Official Trailer (2023 Movie) - Tom Cruise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="video-info">
                <h1 className="title">
                    <span>Mission:Impossible</span>
                    <span>Dead Reckoning Part One</span>
                </h1>
                <p className="date-duration-views">
                    <span>10 Jan 2020</span>
                    <span>14 Minus</span>
                    <span>200 Views</span>
                </p>
                <div className="publisher">
                    <div className="img">
                        <img src="/user-images/ibms.jpg" alt="username" />
                    </div>
                    <p className="username">Ibrahim Ansari</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;