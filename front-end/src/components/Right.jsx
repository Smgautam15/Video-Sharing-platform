import data from '../formFields.js';

const Input = ({type, name, value, placeholder}) =>{
    return(
        <input type={type} name={name} value={value} placeholder={placeholder} />
    )
}


const Right = ({title, desc}) =>{
    return(
        <div className="right">
            <h2 className="right__title">{title}</h2>
            <p className="right__desc">{desc}</p>
            <form method="post" className="form">
                {
                    title === 'Sign in' ?
                    data.filter(obj => obj.name === 'email' || obj.name === 'pwd').map(d => <Input {...d} />) :
                    data.map(d => <Input {...d} />)
                }
                <div className="btn">
                    <button type="submit">{title}</button>
                </div>
            </form>
        </div>
    )
}

export default Right;