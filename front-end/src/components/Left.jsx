const Left = ({text}) =>{
    return(
        <div className="left">
            <h1 className="left__title">Tuner</h1>
            <p className="left__desc">
                <span>Enjoy Multiple videos</span> 
                <span>at one place</span>
            </p>
            <p className="left__register">{text}</p>
        </div>
    )
}

export default Left;